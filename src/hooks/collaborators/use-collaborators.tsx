import { useQuery } from '@tanstack/react-query'
import { pb } from '../../main'
import { User } from '../../types/user'
import { RecordModelExpanded } from '../../types/pocketbase'
import { collaboratorsKeys } from '../query-keys'
import { usePocket } from '../../contexts/PocketContext'

export const useCollaborators = ({ enabled }: { enabled?: boolean }) => {
    const { collaborator } = usePocket()

    return useQuery({
        queryKey: collaboratorsKeys.all(),
        queryFn: async () => {
            const equipeId = collaborator?.equipe // get from connected user > collaborator > equipe 'jro515bl4vdd8zn'

            const data = await pb.collection('collaborators').getFullList({
                filter: `equipe = "${equipeId}" && isLeft = false`,
                sort: '-points',
                expand: 'user'
            })

            console.log(data)

            return data as RecordModelExpanded<User>[]
        },
        enabled: !!enabled
    })
}
