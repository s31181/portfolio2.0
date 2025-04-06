
import type { Meta, StoryObj } from '@storybook/react';
import { ProjectFlipper } from './ProjectFlipper';
import { Ags, Chandelier, Garden, Rawcut } from '@images';

export default {
    title: 'Organisms/ProjectFlipper',
    component: ProjectFlipper,
} satisfies Meta<typeof ProjectFlipper>;

type Story = StoryObj<typeof ProjectFlipper>;

export const Default: Story = {
    args: {
        projects: [
            { image: Ags, title: 'Ags Project', description: 'Description for Ags project', link: 'https://www.ags.com' },
            { image: Chandelier, title: 'Chandlier Project', description: 'Description for Chandlier project', link: 'https://www.chandelier.com' },
            { image: Garden, title: 'Garden Project', description: 'Description for Garden project', link: 'https://www.garden.com' },
            { image: Rawcut, title: 'Rawcut Project', description: 'Description for Rawcut project', link: 'https://www.rawcut.com' },
        ],
    },
};
