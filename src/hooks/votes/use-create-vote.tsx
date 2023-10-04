import { useMutation, useQueryClient } from '@tanstack/react-query'
import { pb } from '../../main'
import { CreateVote, VoteSchema } from '../../types/vote'
import { usePocket } from '../../contexts/PocketContext'
import { collaboratorsKeys, votesKeys } from '../query-keys'

export default function useCreateVote() {
    const { user, collaborator } = usePocket()
    const queryClient = useQueryClient()

    return useMutation(
        async (newVote: CreateVote) => {
            if (!collaborator || !user) throw new Error('Collaborator or User is null')

            if (newVote.spentPoints < 1) throw new Error('spentPoints minimal value not respected')

            // check if user has already voted
            const votes = await pb.collection('votes').getFullList({
                filter: `user_voting = "${newVote.user_voting}" && session = "${newVote.session}"`
            })

            if (votes.length > 0) {
                throw new Error(`User (${newVote.user_voting}) already voted for this session (${newVote.session})`)
            }

            const data = await pb.collection('votes').create(newVote)

            await pb.collection('collaborators').update(collaborator.id, {
                points: collaborator.points - newVote.spentPoints
            })

            return VoteSchema.parse(data)
        },
        {
            onSuccess() {
                void queryClient.invalidateQueries(collaboratorsKeys.one(user?.id ?? ''))
                void queryClient.invalidateQueries(collaboratorsKeys.all())
                void queryClient.invalidateQueries(votesKeys.one(user?.id ?? ''))
            }
        }
    )
}
