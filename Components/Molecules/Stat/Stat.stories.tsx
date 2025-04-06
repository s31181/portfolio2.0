import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from './Stat';
import { CSS3, HTML5, JavaScript } from '@images';

const meta: Meta<typeof Stat> = {
    title: 'Molecules/Stat',
    component: Stat,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
    args: {
        imageSrc: CSS3,
        stat: '99%',
        subtitle: 'CSS3',
    },
};

export const Html5: Story = {
    args: {
        imageSrc: HTML5,
        stat: '99%',
        subtitle: 'HTML5',
    },
};

export const jsStory: Story = {
    args: {
        imageSrc: JavaScript,
        stat: '80%',
        subtitle: 'JavaScript',
    },
};
