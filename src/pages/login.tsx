import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { usePocket } from '../contexts/PocketContext'
import { Alert, Button, Card, Stack, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import HeadingTitle from '../components/heading-title'

type LoginUser = {
    username: string
    password: string
}

export default function Login() {
    const navigate = useNavigate()

    const form = useForm<LoginUser>({
        initialValues: {
            username: '',
            password: ''
        },
        validate: {
            username: (value) => (value.length < 2 ? 'Must have at least 2 letters' : null),
            password: (value) => (value.length < 2 ? 'Must have at least 2 letters' : null)
        }
    })

    const { login, user } = usePocket()

    const [isAuthFailed, setIsAuthFailed] = useState(false)

    if (user) navigate('/')

    async function onSubmit(user: LoginUser) {
        try {
            const authData = await login(user.username, user.password)
            if (authData) {
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            setIsAuthFailed(true)
        }
    }

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}
        >
            <Card sx={{ width: 400 }} shadow='sm' padding='lg' radius='md' withBorder>
                <form onSubmit={form.onSubmit(onSubmit)}>
                    <Stack>
                        <HeadingTitle text='Qui sera le' textColored='prochain' align='center' />

                        <TextInput placeholder='Username' withAsterisk {...form.getInputProps('username')} />

                        <TextInput type='password' placeholder='Password' withAsterisk {...form.getInputProps('password')} />

                        <Button type='submit'>
                            Se connecter
                        </Button>

                        {isAuthFailed && <Alert color='red'>Username ou password invalide.</Alert>}
                    </Stack>
                </form>
            </Card>
            <a href={`mailto:${import.meta.env.VITE_MAIL_TO_ADMIN}subject=[Qui sera le prochain] Demande de compte`}>
                <Text color='indigo' mt='2'>
                    Demander un compte
                </Text>
            </a>
        </main>
    )
}
