import { Stack } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const ExercisesLayout = () => {
  const {
    styles: { contentStyle },
  } = useStyles(stylesheet);

  return (
    <Stack screenOptions={{ contentStyle, headerShown: true }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

const stylesheet = createStyleSheet(({ colors }) => ({
  contentStyle: {
    backgroundColor: colors.black,
  },
}));

export default ExercisesLayout;
