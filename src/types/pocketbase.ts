export type RecordModelExpanded<T> = {
    [key: string]: any
    collectionId: string
    collectionName: string
    expand: {
        [key: string]: T
    }
}
