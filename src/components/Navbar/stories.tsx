import { Meta } from '@storybook/react/types-6-0'
import { Navbar } from '.'

export default {
    title: 'Navbar',
    component: Navbar,
    args: {
        text: 'PokeNext',
        srcImg: '/assets/images/pokeball.png',
    },
} as Meta

export const Template = (args) => {
    return (
        <div>
            <Navbar {...args} />
        </div>
    )
}
