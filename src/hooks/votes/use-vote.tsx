import { useQuery } from '@tanstack/react-query'
import { pb } from '../../main'
import { votesKeys } from '../query-keys'
import { Vote } from '../../types/vote'

export const useVote = ({ userId, sessionId, enabled }: { userId: string; sessionId: string; enabled?: boolean }) => {
    return useQuery({
        queryKey: votesKeys.one(userId),
        queryFn: async () => {
            const data = await pb.collection('votes').getFullList<Vote>({
                filter: `user_voting = "${userId}" && session = "${sessionId}"`
            })
      
            if (data.length === 0) {
                return null
            }

            return data[0]
        },
        enabled: !!enabled
    })
}
