import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tag, TagProps } from './Tag';

export default {
    title: 'Atoms/Tag',
    component: Tag,
} as Meta;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Sample Tag',
};

