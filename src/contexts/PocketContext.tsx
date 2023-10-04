import PocketBase, { RecordAuthResponse, RecordModel } from 'pocketbase'
import { useMemo, useState, useEffect, useCallback, useContext, createContext } from 'react'
import { User } from '../types/user'
import { useCollaborator } from '../hooks/collaborators/use-collaborator'
import { Collaborator } from '../types/collaborator'

type PocketContextType = {
    login: (username: string, password: string) => Promise<RecordAuthResponse<RecordModel>>
    logout: () => void
    user: User | null
    collaborator: Collaborator | null
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
    const [collaborator, setCollaborator] = useState<Collaborator | null>(null)

    const { data: collab } = useCollaborator({
        userId: pb.authStore?.model?.id ?? '',
        enabled: !!pb.authStore?.model?.id
    })

    useEffect(() => {
        setCollaborator(collab ?? null)
    }, [collab])

    console.log({ collab })

    useEffect(() => {
        return pb.authStore.onChange((token, model) => {
            setToken(token)
            setUser(model as User | null)
            setCollaborator(collab ?? null)
        })
    }, [])

    const login = useCallback(async (username: string, password: string) => {
        return await pb.collection('users').authWithPassword(username, password)
    }, [])

    const logout = useCallback(() => {
        pb.authStore.clear()
    }, [])

    return <PocketContext.Provider value={{ login, logout, user, collaborator, token, pb }}>{children}</PocketContext.Provider>
}

export const usePocket = () => useContext(PocketContext)
