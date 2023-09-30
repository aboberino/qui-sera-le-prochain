import { useQuery } from '@tanstack/react-query'
import { pb } from '../../main'
import { User } from '../../types/user'
import { RecordModelExpanded } from '../../types/pocketbase'

export const useCollaborators = () => {
    return useQuery({
        queryKey: ['collaborators'],
        queryFn: async () => {

            const data = await pb.collection('collaborators').getFullList({
                sort: '-points',
                expand: 'user'
            });
 
            return data as RecordModelExpanded<User>[]
        }
    })
}

