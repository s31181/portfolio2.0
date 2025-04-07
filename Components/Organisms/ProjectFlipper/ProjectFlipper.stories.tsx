
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
            { image: Ags, title: 'Associated Global Systems', description: 'A WordPress site for Associated Global Systems. This site was built with WordPress and uses the AGS theme. Although the site is no longer live, the link is connected to a version using the wayback machine.', link: 'https://web.archive.org/web/20220316171848/http://www.agsystems.com/ ', tags: ["WordPress", "PHP", "SCSS", "JavaScript"] },
            { image: Chandelier, title: 'Chandlier Circus Entertainment', description: 'Chandelier Circus Entertainment is a performing arts troupe that puts on shows in the midwest. This site was built with Gatsby and uses a custom theme to showcase their work, talent, and events.', link: 'https://chandeliercircus.com/', tags: ["React", "Gatsby", "SCSS", "JavaScript", "HTML"] },
            { image: Garden, title: 'Garden Project', description: 'Description for Garden project', link: 'https://www.garden.com' },
            { image: Rawcut, title: 'Rawcut Project', description: 'Description for Rawcut project', link: 'https://www.rawcut.com' },
        ],
    },
};
