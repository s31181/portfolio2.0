import path from 'path';
import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../Components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@styles': path.resolve(__dirname, '../styles'),
        '@components': path.resolve(__dirname, '../Components'),
        '@images': path.resolve(__dirname, '../public/images')
      };
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};

export default config;