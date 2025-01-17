import { SafeAreaView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Text } from "@/components";
// import "@/src/styles/unistyles";

const HomeScreen = () => {
  const {
    styles: { container },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View style={container}>
        <Text color="neutral.400" size="lg" weight="semibold">
          “There are no shortcuts—everything is reps, reps, reps.”
        </Text>
      </View>
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet(({ spacing }) => ({
  container: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
  },
}));

export default HomeScreen;
