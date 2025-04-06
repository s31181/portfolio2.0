import type { Meta, StoryObj } from '@storybook/react';
import CircleText from './CircleText';

const meta: Meta<typeof CircleText> = {
    title: 'Atoms/CircleText',
    component: CircleText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CircleText>;

export const Default: Story = {
    args: {
        text: '• YEARS • OF • EXPERIENCE',
        centerText: '9',
    },
};

export const LongText: Story = {
    args: {
        text: '• VERY LONG TEXT THAT MIGHT NOT FIT AROUND THE CIRCLE •',
        centerText: '!',
    },
};

export const NoCenter: Story = {
    args: {
        text: '• CIRCULAR TEXT WITH NO CENTER •',
    },
};
