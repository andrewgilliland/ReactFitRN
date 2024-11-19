import { SafeAreaView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ExerciseScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {
    styles: { headerContainer, screenHeading, headerIcon },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View style={headerContainer}>
        <Text style={screenHeading}>{id}</Text>
        <MaterialCommunityIcons
          size={24}
          name="weight-lifter"
          color={headerIcon.color}
        />
      </View>
      <View>
        <Text>Description goes here!</Text>
      </View>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
  headerContainer: {
    borderWidth: 1,
    paddingHorizontal: 36,
    paddingVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenHeading: {
    color: colors.gray[800],
    fontSize: font.size["2xl"],
    fontWeight: "600",
  },
  headerIcon: {
    color: colors.gray[800],
  },
}));
