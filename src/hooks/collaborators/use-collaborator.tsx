import { useQuery } from '@tanstack/react-query'
import { pb } from '../../main'
import { Collaborator } from '../../types/collaborator'
import { collaboratorsKeys } from '../query-keys'

export const useCollaborator = ({ userId, enabled }: { userId: string; enabled?: boolean }) => {
    return useQuery({
        queryKey: collaboratorsKeys.one(userId),
        queryFn: async () => {
            const data = await pb.collection('collaborators').getFullList<Collaborator>({
                filter: `user = "${userId}"`
            })
            
            return data[0]
        },
        enabled: !!enabled
    })
}
