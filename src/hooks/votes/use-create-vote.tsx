import { useMutation } from '@tanstack/react-query'
import { pb } from '../../main'
import { CreateVote, VoteSchema } from '../../types/vote'

export default function useCreateVote() {
    return useMutation(async (newVote: CreateVote) => {
        const data = await pb.collection('votes').create(newVote)

        const vote = VoteSchema.parse(data)
        // pb.collection('collaborators').update(vote.user_voting, {
            // decrease collaborators points
        // })

        return vote
    })
}
