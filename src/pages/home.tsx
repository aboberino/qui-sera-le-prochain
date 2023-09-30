import HeadingTitle from '../components/heading-title'
import { Box, SimpleGrid, createStyles } from '@mantine/core'
import { useCollaborators } from '../hooks/collaborators/use-collaborators'
import { PronosticCard } from '../components/pronostic-card'
import { useForm } from '@mantine/form'
import { usePocket } from '../contexts/PocketContext'

export type VoteInput = {
    spentPoints: number
}

export default function Home() {
    const { classes } = useStyles()
    const { user } = usePocket()
    const { data } = useCollaborators()

    const form = useForm<VoteInput>({
        initialValues: {
            spentPoints: 0
        },
        validate: {
            spentPoints: (value) => (value > maxPoints ? `Vous disposez de ${maxPoints} points` : null)
        }
    })

    const maxPoints = data?.filter((collab) => collab.expand['user'].id === user?.id)[0]['points']

    function onSubmit(values: VoteInput) {
        console.log(values)
    }

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
                {data &&
                    data.map((collab) => (
                        <PronosticCard key={collab.id} user={collab.expand['user']} form={form} onSubmit={onSubmit} />
                    ))}
            </SimpleGrid>
        </Box>
    )
}

const useStyles = createStyles(() => ({
    main: {
        maxWidth: 1200,
        margin: 'auto'
    }
}))
