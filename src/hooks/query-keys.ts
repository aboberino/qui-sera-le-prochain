export const collaboratorsKeys = {
    root: ['collaborators'] as const,
    all: () => [...collaboratorsKeys.root, 'all'] as const,
    one: (id: string) => [...collaboratorsKeys.root, id] as const
}

export const sessionsKeys = {
    root: ['sessionsKeys'] as const,
    current: (equipeId: string) => [...sessionsKeys.root, equipeId] as const
}

export const votesKeys = {
    root: ['votesKeys'] as const,
    one: (userId: string) => [...votesKeys.root, userId] as const
}
