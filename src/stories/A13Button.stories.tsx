import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import A13Button from '../components/a13-button/A13Button'

export default {
    title: 'Example/Button',
    component: A13Button,
    
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof A13Button>;

const Template: ComponentStory<typeof A13Button> = (args) => <A13Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'green',
    children: 'test'
};
