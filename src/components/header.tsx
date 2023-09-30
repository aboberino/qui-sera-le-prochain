import { Avatar, Box, Button, Popover, Text } from '@mantine/core'
import { usePocket } from '../contexts/PocketContext'
import { getAvatarUrl } from '../utils/user'
import { IconLogout } from '@tabler/icons-react'

export default function Header() {
    const { user, logout } = usePocket()
    console.log(user)
    return (
        <Box p={12} sx={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Popover width={200} position='bottom' withArrow shadow='md'>
                <Popover.Target>
                    <Avatar src={getAvatarUrl(user)} size={60} radius={120} sx={{ cursor: 'pointer' }} />
                </Popover.Target>
                <Popover.Dropdown>
                    <Button leftIcon={<IconLogout />} color='red' onClick={() => logout()}>
                        Déconnexion
                    </Button>
                </Popover.Dropdown>
            </Popover>

            <Text weight='bold' fs='italic'>
                Plus que{' '}
                <Text span c='indigo' inherit>
                    120 jours
                </Text>{' '}
                à tenir
            </Text>
        </Box>
    )
}
