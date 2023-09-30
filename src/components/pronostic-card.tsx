import { Avatar, Text, Button, Card, Popover, NumberInput } from '@mantine/core'
import { User } from '../types/user'
import { VoteInput } from '../pages/home'
import { UseFormReturnType } from '@mantine/form'
import { memo, useMemo } from 'react'

type PronisticCardProps = {
    user: User
    form: UseFormReturnType<VoteInput, (values: VoteInput) => VoteInput>
    onSubmit: (values: VoteInput) => void
}

function PronoCard({ user, form, onSubmit }: PronisticCardProps) {
    const avatarUrl = `${import.meta.env.VITE_API_URL}/files/users/${user.id}/${user.avatar}`

    const randomCote = useMemo(() => (1 + Math.random() * 1.5).toFixed(2), [])

    return (
        <Popover width='target' trapFocus position='bottom' withArrow shadow='md'>
            <Popover.Target>
                <Card shadow='sm' padding='lg' radius='md' withBorder sx={{ overflow: 'visible' }}>
                    <Avatar src={avatarUrl} size={120} radius={120} mx='auto' />

                    <Text ta='center' fz='lg' fw={500} mt='md'>
                        {user.name}
                    </Text>

                    <Button variant='filled'  fullWidth mt='md'>
                        {randomCote}
                    </Button>
                </Card>
            </Popover.Target>

            <Popover.Dropdown sx={(theme) => ({ background: theme.colors.dark[7] })}>
                <form onSubmit={form.onSubmit(onSubmit)}>
                    <NumberInput
                        label='Nombre de points'
                        placeholder='ex: 10'
                        size='xs'
                        min={0}
                        {...form.getInputProps('spentPoints')}
                    />

                    <Button variant='filled' color='green' fullWidth mt='md' type='submit'>
                        Valider
                    </Button>
                </form>
            </Popover.Dropdown>
        </Popover>
    )
}

export const PronosticCard = memo(PronoCard)
