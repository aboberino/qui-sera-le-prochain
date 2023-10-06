const FACTEUR_AJUSTEMENT_JOURS: number = 0.01

export function calculCote(nbJours: number, chargeMentale: number) {
    const coteInitial = 1 - nbJours * FACTEUR_AJUSTEMENT_JOURS + 1

    const coteAjustee = coteInitial / (1 + (10 - chargeMentale) * (nbJours / FACTEUR_AJUSTEMENT_JOURS)) + 1

    return coteAjustee.toFixed(2)
}