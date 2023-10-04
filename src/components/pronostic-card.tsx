import { Avatar, Text, Button, Card, Popover, NumberInput, Alert } from '@mantine/core'
import { User } from '../types/user'
import { VoteInput } from '../pages/home'
import { UseFormReturnType } from '@mantine/form'
import { memo, useMemo } from 'react'
import { RecordModelExpanded } from '../types/pocketbase'
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-react'
import { Vote } from '../types/vote'

type PronisticCardProps = {
    collaborator: RecordModelExpanded<User>
    form: UseFormReturnType<VoteInput, (values: VoteInput) => VoteInput>
    onSubmit: (values: VoteInput, collaborator: RecordModelExpanded<User>) => void
    vote: Vote | null
}

function PronoCard({ collaborator, form, onSubmit, vote }: PronisticCardProps) {
    const user = useMemo(() => collaborator.expand['user'], [collaborator])
    const isVoted = useMemo(() => vote?.collaborator === collaborator['id'], [vote, collaborator])

    const avatarUrl = user.avatar ? `${import.meta.env.VITE_API_URL}/files/users/${user.id}/${user.avatar}` : ''

    const randomCote = useMemo(() => (1 + Math.random() * 1.5).toFixed(2), [])

    return (
        <>
            <Card shadow='sm' padding='lg' radius='md' withBorder sx={{ overflow: 'visible', position: 'relative' }}>
                <Avatar src={avatarUrl} size={120} radius={120} mx='auto' />

                <Text ta='center' fz='lg' fw={500} mt='md'>
                    {user.name}
                </Text>

                {isVoted && (
                    <Alert
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',

                            '.mantine-Alert-wrapper': {
                                alignItems: 'center',
                                '& .mantine-Alert-title': {
                                    margin: 0
                                }
                            }
                        }}
                        icon={<IconAlertCircle size='1rem' />}
                        radius='md'
                        title={`Points parié : ${vote?.spentPoints}`}
                    > </Alert>
                )}

                <Popover width='target' trapFocus position='bottom' withArrow shadow='md'>
                    <Popover.Target>
                        {isVoted ? (
                            <Button leftIcon={<IconCircleCheck />} variant='filled' fullWidth mt='md' color='green'>
                                {randomCote}
                            </Button>
                        ) : (
                            <Button variant='filled' fullWidth mt='md'>
                                {randomCote}
                            </Button>
                        )}
                    </Popover.Target>

                    {!vote && (
                        <Popover.Dropdown sx={(theme) => ({ background: theme.colors.dark[7] })}>
                            <form onSubmit={form.onSubmit((values) => onSubmit(values, collaborator))}>
                                <NumberInput label='Nombre de points' placeholder='ex: 10' size='xs' min={1} {...form.getInputProps('spentPoints')} />

                                <Button variant='filled' color='green' fullWidth mt='md' type='submit'>
                                    Valider
                                </Button>
                            </form>
                        </Popover.Dropdown>
                    )}
                </Popover>
            </Card>
        </>
    )
}

export const PronosticCard = memo(PronoCard)
