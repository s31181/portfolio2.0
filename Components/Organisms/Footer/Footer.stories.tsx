import { Meta, StoryFn } from '@storybook/react';
import { Footer } from './Footer';

export default {
    title: 'Organisms/Footer',
    component: Footer,
} as Meta;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
