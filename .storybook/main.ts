const { mergeConfig } = require("vite");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        nodeResolve({
          extensions: [".jsx", ".js", ".tsx", ".ts"],
        }),
      ],
    });
  },
  docs: {
    autodocs: true,
  },
};
