import { Meta } from '@storybook/react/types-6-0'
import { LogoTitle } from '.'

export default {
    title: 'LogoTitle',
    component: LogoTitle,
} as Meta

export const Template = (args) => {
    return (
        <div>
            <LogoTitle {...args} />
        </div>
    )
}
