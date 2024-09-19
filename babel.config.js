module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // ! https://stackoverflow.com/questions/33117227/setting-environment-variable-in-react-native
    plugins: [
      "transform-inline-environment-variables",
      "react-native-reanimated/plugin",
    ],
  };
};
