import { SafeAreaView, Text, View } from "react-native";
import "@/src/styles/unistyles";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const HomeScreen = () => {
  const {
    styles: { container, quoteText },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View style={container}>
        <Text style={quoteText}>
          “There are no shortcuts—everything is reps, reps, reps.”
        </Text>
      </View>
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet(({ colors, fontSize, spacing, name }) => ({
  container: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
  },
  quoteText: {
    color: name === "dark" ? colors.white : colors.black,
    fontSize: fontSize.lg,
  },
}));

export default HomeScreen;
