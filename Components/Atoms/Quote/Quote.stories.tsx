import type { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';


const meta: Meta<typeof Quote> = {
    title: 'Atoms/Quote',
    component: Quote,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
    args: {
        children: 'This is a sample quote.',
    },
};

export const LongQuote: Story = {
    args: {
        children: 'This is a longer quote that spans multiple lines. It is used to demonstrate how the Quote component handles longer text content. The quick brown fox jumps over the lazy dog.',
    },
};

export const Example: Story = {
    args: {
        children: <>{"Driven by Precision, Focused on Building Interfaces That Are Inclusive, Performant, and Intuitive."}<br />{"Engineering Seamless Web Experiences That Prioritize Accessibility, Speed, and Human-Centered Design."}</>
    }
}