import { SafeAreaView, View } from "react-native";
import "@/src/styles/unistyles";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Button } from "@/components";
import { signOut } from "@/src/lib/supabase";
import { router } from "expo-router";

const HomeScreen = () => {
  const {
    styles: { container },
  } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <View style={container}>
        <Button
          color="orange.600"
          size="lg"
          onPress={() => {
            signOut();
            router.push("/index");
          }}
          style={{ width: "100%" }}
        >
          Sign Out
        </Button>
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
