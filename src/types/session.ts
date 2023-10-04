import { z } from 'zod'

export const SessionSchema = z.object({
    collectionId: z.string(),
    collectionName: z.string(),
    created: z.string(),
    id: z.string(),
    updated: z.string(),
    equipe: z.string(),
    name: z.string(),
    collaborator_winner: z.string(),
})

export const SessionCollectionSchema = z.object({
    page: z.number(),
    perPage: z.number(),
    totalItems: z.number(),
    totalPages: z.number(),
    items: z.array(SessionSchema)
})

export type Session = z.infer<typeof SessionSchema>
export type SessionCollection = z.infer<typeof SessionCollectionSchema>
