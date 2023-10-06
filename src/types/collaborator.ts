import { z } from 'zod'

export const CollaboratorSchema = z.object({
    collectionId: z.string(),
    collectionName: z.string(),
    created: z.string(),
    id: z.string(),
    updated: z.string(),
    image: z.string().optional().nullable(),
    points: z.number(),
    equipe: z.string(),
    user: z.string(),
    isLeft: z.boolean()
})

export const CollaboratorCollectionSchema = z.object({
    page: z.number(),
    perPage: z.number(),
    totalItems: z.number(),
    totalPages: z.number(),
    items: z.array(CollaboratorSchema)
})

export type Collaborator = z.infer<typeof CollaboratorSchema>
export type CollaboratorCollection = z.infer<typeof CollaboratorCollectionSchema>
