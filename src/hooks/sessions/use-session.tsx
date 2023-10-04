import { useQuery } from '@tanstack/react-query'
import { pb } from '../../main'
import { sessionsKeys } from '../query-keys'
import { Session } from '../../types/session'

export const useSession = ({ equipeId, enabled }: { equipeId: string; enabled?: boolean }) => {
    return useQuery({
        queryKey: sessionsKeys.current(equipeId),
        queryFn: async () => {
            const data = await pb.collection('sessions').getFullList<Session>({
                filter: `equipe = "${equipeId}" && end_date = ''` // current session doesn't have end_date
            })
            
            return data[0]
        },
        enabled: !!enabled
    })
}
