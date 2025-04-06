
import { StoryObj, Meta, } from '@storybook/react';
import { StatBox } from '@components';
import { HTML5, CSS3, JavaScript, Figma, ReactImg, TypeScript } from '@images';
const meta: Meta<typeof StatBox> = {
    title: 'Organisms/StatBox',
    component: StatBox,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatBox>;

export const Default: Story = {
    args: {
        stats: [
            {
                imageSrc: HTML5,
                stat: '100%',
                subtitle: 'Completion Rate',
            },
            {
                imageSrc: CSS3,
                stat: '24/7',
                subtitle: 'Support',
            },
            {
                imageSrc: JavaScript,
                stat: '500+',
                subtitle: 'Projects',
            },
            {
                imageSrc: Figma,
                stat: '500+',
                subtitle: 'Projects',
            },
            {
                imageSrc: ReactImg,
                stat: '500+',
                subtitle: 'Projects',
            },
            {
                imageSrc: TypeScript,
                stat: '500+',
                subtitle: 'Projects',
            },

        ],
    },
};