import { Avatar, Box, Button, Group, Text } from '@mantine/core'
import { usePocket } from '../contexts/PocketContext'
import { getAvatarUrl } from '../utils/user'
import { IconLogout } from '@tabler/icons-react'

export default function Header() {
    const { user, logout, collaborator } = usePocket()

    return (
        <Group position='apart' p={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <Avatar src={getAvatarUrl(user)} size={50} radius={120} />

                <Text weight='bold' fs='italic'>
                    Plus que{' '}
                    <Text span c='indigo' inherit>
                        {collaborator?.points ?? 0} jours
                    </Text>{' '}
                    à tenir
                </Text>
            </Box>

            <Button leftIcon={<IconLogout />} color='red' variant='subtle' onClick={() => logout()}>
                Déconnexion
            </Button>
        </Group>
    )
}
