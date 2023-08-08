export {};
module.exports = {
  stories: ['./*.stories.tsx'],
  addons: ['@storybook/addon-essentials','@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};