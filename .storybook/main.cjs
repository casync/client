const { mergeConfig } = require("vite");
const linaria = require("@linaria/vite");
const { nodeResolve } = require("@rollup/plugin-node-resolve");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
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
        {
          ...linaria.default({
            include: ["**/*.{js,jsx,ts,tsx}"],
            babelOptions: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react",
              ],
            },
          }),
          enforce: "pre",
        },
      ],
    });
  },
};
