import { SafeAreaView, Text, View } from "react-native";

import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function ExerciseScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>Exercise</Text>
      </View>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(
  ({ colors, font, spacing, rounded }) => ({})
);
