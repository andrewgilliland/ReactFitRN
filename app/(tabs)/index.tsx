import { Text, View } from "react-native";
import "@/src/style/unistyles";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function App() {
  const {
    styles: { container, quoteText },
  } = useStyles(stylesheet);

  return (
    <View style={container}>
      <Text style={quoteText}>
        “There are no shortcuts—everything is reps, reps, reps.”
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors, font, spacing, name }) => ({
  container: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
  },
  quoteText: {
    color: name === "dark" ? colors.white : colors.black,
    fontSize: font.size.lg,
  },
}));
