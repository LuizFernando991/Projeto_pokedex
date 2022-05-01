import { Meta, Story } from '@storybook/react/types-6-0'
import { PokemonCardProps } from '.'
import { PokemonCard } from '.'

export default {
    title: 'PokemonCard',
    component: PokemonCard,
} as Meta

export const Template: Story<PokemonCardProps> = (args) => {
    return (
        <div>
            <PokemonCard {...args} />
        </div>
    )
}
