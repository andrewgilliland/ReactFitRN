module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // ! https://stackoverflow.com/questions/33117227/setting-environment-variable-in-react-native
    // ! https://stackoverflow.com/questions/77677937/getting-this-error-when-starting-a-react-native-app-for-iphone
    plugins: ["react-native-reanimated/plugin"],
  };
};
