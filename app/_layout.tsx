import { Stack } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const RootLayout = () => {
  const {
    styles: { contentStyle },
  } = useStyles(stylesheet);

  return (
    <Stack screenOptions={{ contentStyle }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

const stylesheet = createStyleSheet(({ colors, spacing, rounded }) => ({
  contentStyle: {
    backgroundColor: colors.black,
  },
}));

export default RootLayout;
