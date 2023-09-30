import { Flex, Button, Text } from '@radix-ui/themes'
import { usePocket } from '../contexts/PocketContext'
import HeadingTitle from '../components/heading-title'

export default function Home() {
    const { logout } = usePocket()
    return (
        <div>
            <HeadingTitle text='Qui sera le' textColored='prochain' /> 

            <Button onClick={() => logout()}>logout</Button>

            <Flex direction='column' gap='2'>
                <Text>Hello from Radix Themes :)</Text>
                <Button>Let's go</Button>
            </Flex>
        </div>
    )
}
