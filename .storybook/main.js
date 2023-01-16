module.exports = {
  "stories": [
    "../src/components/**/stories.tsx",
  ],
  "addons": [
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}