import { useQuery } from '@tanstack/react-query'
import { pb } from '../../main'
import { User } from '../../types/user'
import { RecordModelExpanded } from '../../types/pocketbase'
import { collaboratorsKeys } from '../query-keys'
import { usePocket } from '../../contexts/PocketContext'

export const useCollaboratorHumeur = ({ enabled }: { enabled?: boolean }) => {
    const { collaborator } = usePocket()

    return useQuery({
        queryKey: collaboratorsKeys.all(),
        queryFn: async () => {
            // TODO: GET ALL HUMEUR WHERE COLLAB IN EQUIPE ID 
        },
        enabled: !!enabled
    })
}
