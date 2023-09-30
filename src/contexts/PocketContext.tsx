import PocketBase, { RecordAuthResponse, RecordModel } from 'pocketbase'
import { useMemo, useState, useEffect, useCallback, useContext, createContext } from 'react'
import { User } from '../types/user'

type PocketContextType = {
    login: (username: string, password: string) => Promise<RecordAuthResponse<RecordModel>>
    logout: () => void
    user: User | null
    token: string
    pb: PocketBase
}

const PocketContext = createContext<PocketContextType>({} as PocketContextType)

type PocketProviderProps = {
    children: React.ReactNode
}

export function PocketProvider({ children }: PocketProviderProps) {
    const pb = useMemo(() => new PocketBase(import.meta.env.VITE_POCKETBASE_URL), [])

    const [token, setToken] = useState(pb.authStore.token)
    const [user, setUser] = useState<User | null>(pb.authStore.model as User | null)

    useEffect(() => {
        return pb.authStore.onChange((token, model) => {
            setToken(token)
            setUser(model as User | null)
        })
    }, [])

    const login = useCallback(async (username: string, password: string) => {
        return await pb.collection('users').authWithPassword(username, password)
    }, [])

    const logout = useCallback(() => {
        pb.authStore.clear()
    }, [])

    return <PocketContext.Provider value={{ login, logout, user, token, pb }}>{children}</PocketContext.Provider>
}

export const usePocket = () => useContext(PocketContext)
