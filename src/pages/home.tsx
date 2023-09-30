import { Flex, Button, Text } from '@radix-ui/themes'
import { usePocket } from '../contexts/PocketContext'

export default function Home() {
    const { logout } = usePocket()
    return (
        <div>
            <h1>Home</h1>

            <Button onClick={() => logout()}>logout</Button>

            <Flex direction='column' gap='2'>
                <Text>Hello from Radix Themes :)</Text>
                <Button>Let's go</Button>
            </Flex>
        </div>
    )
}
