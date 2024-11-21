import { Text } from "react-native";
// import { createStyleSheet } from "react-native-unistyles";
import ScreenLayout from "@/src/components/Layouts/ScreenLayout";

export default function ExercisesScreen() {
  return (
    <ScreenLayout title="Workouts" icon="dumbbell">
      <Text>Workouts</Text>
    </ScreenLayout>
  );
}

// const stylesheet = createStyleSheet(({ colors, font, spacing, rounded }) => ({
//   headerContainer: {
//     borderWidth: 1,
//     paddingHorizontal: 36,
//     paddingVertical: 24,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   screenHeading: {
//     color: colors.gray[800],
//     fontSize: font.size["2xl"],
//     fontWeight: "600",
//   },
//   headerIcon: {
//     color: colors.gray[800],
//   },
//   searchInputContainer: {
//     borderBottomWidth: 1,
//     paddingHorizontal: 36,
//     paddingVertical: 16,
//   },
//   searchInputIcon: {
//     color: colors.gray[500],
//   },
// }));
