import { z } from 'zod'

export const UserSchema = z.object({
    avatar: z.string(),
    collectionId: z.string(),
    collectionName: z.string(),
    created: z.string(),
    emailVisibility: z.boolean(),
    id: z.string(),
    name: z.string(),
    updated: z.string(),
    username: z.string(),
    verified: z.boolean(),
})

export const UserCollectionSchema = z.object({
    page: z.number(),
    perPage: z.number(),
    totalItems: z.number(),
    totalPages: z.number(),
    items: z.array(UserSchema)
})

export type User = z.infer<typeof UserSchema>
export type UserCollection = z.infer<typeof UserCollectionSchema>