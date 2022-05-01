import { Meta } from '@storybook/react/types-6-0'
import { Navbar } from '.'

export default {
    title: 'Navbar',
    component: Navbar,
} as Meta

export const Template = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}
