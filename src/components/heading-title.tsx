import { Title, Text, TitleProps, SystemProp, DefaultMantineColor } from '@mantine/core'

type HeadingTitleProps = {
    text: string
    textColored: string
    color?: SystemProp<DefaultMantineColor>
} & TitleProps

export default function HeadingTitle({ text, textColored, color = 'indigo', ...rest }: HeadingTitleProps) {
    return (
        <Title order={rest.order ?? 3} {...rest}>
            {text}
            {textColored ? ' ' : ''}
            <Text span c={color} inherit>
                {textColored}
            </Text>
        </Title>
    )
}
