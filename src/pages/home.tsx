import { Button } from '@radix-ui/themes'
import { usePocket } from '../contexts/PocketContext'
import HeadingTitle from '../components/heading-title'
import { Box, SimpleGrid, createStyles } from '@mantine/core'
import { useCollaborators } from '../hooks/collaborators/use-collaborators'
import { PronisticCard } from '../components/pronostic-card'

export default function Home() {
    const { classes } = useStyles()
    const { logout } = usePocket()

    const { data } = useCollaborators()

    console.log(data)
    return (
        <Box className={classes.main}>
            <HeadingTitle order={1} text='Qui sera le' textColored='prochain' align='center' mb={50} />

            <SimpleGrid
                cols={4}
                breakpoints={[
                    { maxWidth: '62rem', cols: 3, spacing: 'md' },
                    { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' }
                ]}
            >
                {data && data.map((collab) => <PronisticCard key={collab.id} user={collab.expand['user']} />)}
            </SimpleGrid>

            <Button onClick={() => logout()}>logout</Button>
        </Box>
    )
}

const useStyles = createStyles((theme) => ({
    main: {
        maxWidth: 1200,
        margin: 'auto'
    }
}))
