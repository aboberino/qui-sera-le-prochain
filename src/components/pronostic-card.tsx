import { Avatar, Text, Button, Card } from '@mantine/core'
import { User } from '../types/user'

type PronisticCardProps = {
    user: User
}

export function PronisticCard({ user }: PronisticCardProps) {
    const avatarUrl = `${import.meta.env.VITE_API_URL}/files/users/${user.id}/${user.avatar}`
    const randomCote = (1 + Math.random() * 1.5).toFixed(2)
    return (
        <Card shadow='sm' padding='lg' radius='md' withBorder>
            <Avatar src={avatarUrl} size={120} radius={120} mx='auto' />
            <Text ta='center' fz='lg' fw={500} mt='md'>
                {user.name}
            </Text>
            <Button variant='filled' fullWidth mt='md'>
                {randomCote}
            </Button>
        </Card>
    )
}
