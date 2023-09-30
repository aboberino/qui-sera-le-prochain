import PocketBase, { AuthModel, RecordAuthResponse, RecordModel } from 'pocketbase'
import { useMemo, useState, useEffect, useCallback, useContext, createContext } from 'react'

type PocketContextType = {
    login: (username: string, password: string) => Promise<RecordAuthResponse<RecordModel>>
    logout: () => void
    user: AuthModel
    token: string
    pb: PocketBase
}

const PocketContext = createContext<PocketContextType>({} as PocketContextType);


type PocketProviderProps = {
    children: React.ReactNode
}

export function PocketProvider({ children }: PocketProviderProps) {
    const pb = useMemo(() => new PocketBase(import.meta.env.VITE_POCKETBASE_URL), [])

    const [token, setToken] = useState(pb.authStore.token)
    const [user, setUser] = useState<AuthModel>(pb.authStore.model)

    useEffect(() => {
        return pb.authStore.onChange((token, model) => {
            setToken(token)
            setUser(model)
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

export const usePocket = () => useContext(PocketContext);