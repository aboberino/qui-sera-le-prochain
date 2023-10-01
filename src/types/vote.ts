import { z } from 'zod'

export const VoteSchema = z.object({
    id: z.string(),
    collectionId: z.string(),
    collectionName: z.string(),
    created: z.string(),
    updated: z.string(),
    user_voting: z.string(),
    collaborator: z.string(),
    session: z.string(),
    spentPoints: z.number()
})

export type Vote = z.infer<typeof VoteSchema>

export type CreateVote = Pick<Vote, 'user_voting' | 'collaborator' | 'session' | 'spentPoints'>
