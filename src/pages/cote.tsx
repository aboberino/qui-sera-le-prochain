import { Card, Group, NumberInput } from '@mantine/core'
import { useMemo, useState } from 'react'

const FACTEUR_AJUSTEMENT: number = 0.01

type User = {
    nbJours: number
    chargeMentale: number
}

export default function Cote() {
    const [facteurAjustement, setfacteurAjustement] = useState(FACTEUR_AJUSTEMENT)

    return (
        <Card>
            <NumberInput
                step={0.01}
                precision={2}
                defaultValue={facteurAjustement}
                label='Facteur Ajustement'
                onChange={(value) => {
                    setfacteurAjustement(value as number)
                }}
            />
            <FormCote nbJours={30} chargeMentale={10} facteurAjustement={facteurAjustement} />
            <FormCote nbJours={90} chargeMentale={10} facteurAjustement={facteurAjustement} />
        </Card>
    )
}

function FormCote({ nbJours, chargeMentale, facteurAjustement }: User & { facteurAjustement: number }) {
    const [user1, setUser1] = useState<User>({ nbJours: nbJours, chargeMentale: chargeMentale })

    const coteInitial = useMemo(() => {
        return 1 - (user1.nbJours * facteurAjustement) + 1

    }, [user1.nbJours, facteurAjustement])

    const coteAjustee = useMemo(() => {
        return coteInitial / (1 + (10 - user1.chargeMentale) * (user1.nbJours / facteurAjustement)) + 1
    }, [coteInitial, user1.chargeMentale])

    return (
        <Group>
            <NumberInput
                defaultValue={user1.nbJours}
                placeholder='Nombre de jour'
                label='Nombre de jour'
                onChange={(value) => {
                    setUser1({ ...user1, nbJours: value as number })
                }}
            />
            <NumberInput
                defaultValue={user1.chargeMentale}
                placeholder='Charge mentale'
                label='Charge mentale'
                onChange={(value) => {
                    setUser1({ ...user1, chargeMentale: value as number })
                }}
            />
            <div>Cote initiale = {coteInitial.toFixed(4)}</div>
            <div>Cote ajustée = {coteAjustee.toFixed(4)}</div>
        </Group>
    )
}
