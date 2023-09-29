import { Card, TextField, Flex, Text, Button, Callout } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { pb } from '../main'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { InfoCircledIcon } from '@radix-ui/react-icons'

type LoginUser = {
    username: string
    password: string
}

export default function Login() {
    const navigate = useNavigate()
    const { handleSubmit, register } = useForm<LoginUser>()

    const [isAuthFailed, setIsAuthFailed] = useState(false)

    async function onSubmit(user: LoginUser) {
        try {
            const authData = await pb.collection('users').authWithPassword(user.username, user.password)
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
            <Card style={{ width: 400 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex gap='3' align='center' direction='column'>
                        <Text as='div' size='6'>
                            Qui sera le prochain
                        </Text>

                        <TextField.Root style={{ width: '100%' }}>
                            <TextField.Input placeholder='username' {...register('username', { required: true })} />
                        </TextField.Root>

                        <TextField.Root style={{ width: '100%' }}>
                            <TextField.Input placeholder='password' {...register('password', { required: true })} type='password' />
                        </TextField.Root>

                        <Button style={{ width: '100%' }}>Se connecter</Button>

                        {isAuthFailed && (
                            <Callout.Root color='red' style={{ width: '100%', boxSizing: 'border-box' }}>
                                <Callout.Icon>
                                    <InfoCircledIcon />
                                </Callout.Icon>
                                <Callout.Text>Username ou password invalide.</Callout.Text>
                            </Callout.Root>
                        )}
                    </Flex>
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
