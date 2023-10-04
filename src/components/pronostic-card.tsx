import { Avatar, Text, Button, Card, Popover, NumberInput } from '@mantine/core'
import { User } from '../types/user'
import { VoteInput } from '../pages/home'
import { UseFormReturnType } from '@mantine/form'
import { memo, useMemo } from 'react'
import { RecordModelExpanded } from '../types/pocketbase'

type PronisticCardProps = {
    collaborator: RecordModelExpanded<User>
    form: UseFormReturnType<VoteInput, (values: VoteInput) => VoteInput>
    onSubmit: (values: VoteInput, collaborator: RecordModelExpanded<User>) => void
}

function PronoCard({ collaborator, form, onSubmit }: PronisticCardProps) {
    const user = useMemo(() => collaborator.expand['user'], [collaborator])
    const avatarUrl = user.avatar ? `${import.meta.env.VITE_API_URL}/files/users/${user.id}/${user.avatar}` : ''

    const randomCote = useMemo(() => (1 + Math.random() * 1.5).toFixed(2), [])

    return (
        <>
            <Card shadow='sm' padding='lg' radius='md' withBorder sx={{ overflow: 'visible' }}>
                <Avatar src={avatarUrl} size={120} radius={120} mx='auto' />

                <Text ta='center' fz='lg' fw={500} mt='md'>
                    {user.name}
                </Text>

                <Popover width='target' trapFocus position='bottom' withArrow shadow='md'>
                    <Popover.Target>
                        <Button variant='filled' fullWidth mt='md'>
                            {randomCote}
                        </Button>
                    </Popover.Target>

                    <Popover.Dropdown sx={(theme) => ({ background: theme.colors.dark[7] })}>
                        <form onSubmit={form.onSubmit((values) => onSubmit(values, collaborator))}>
                            <NumberInput label='Nombre de points' placeholder='ex: 10' size='xs' min={0} {...form.getInputProps('spentPoints')} />

                            <Button variant='filled' color='green' fullWidth mt='md' type='submit'>
                                Valider
                            </Button>
                        </form>
                    </Popover.Dropdown>
                </Popover>
            </Card>
        </>
    )
}

export const PronosticCard = memo(PronoCard)
