import { useState } from "react";
import { Alert, View, AppState } from "react-native";
import { supabase } from "../lib/supabase";

import { createStyleSheet, useStyles } from "react-native-unistyles";
import ThemedTextInput from "./Inputs/ThemedTextInput";
import Button from "./Button";
import Text from "./Text";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function LoginForm() {
  const { styles } = useStyles(stylesheet);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text family="heading" color="neutral.100" size="2xl" weight="bold">
          Login
        </Text>
        <Text family="body" color="neutral.400" size="sm" weight="medium">
          Enter your email below to sign in to your account
        </Text>
      </View>
      <View style={[styles.verticallySpaced, styles["mt-5"]]}>
        <View>
          <ThemedTextInput
            valueState={[email, setEmail]}
            autoCapitalize={"none"}
            label="Email"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <ThemedTextInput
            valueState={[password, setPassword]}
            autoCapitalize={"none"}
            label="Password"
          />
        </View>
        <View style={[styles.verticallySpaced, styles["mt-5"]]}>
          <Button
            theme="primary"
            size="lg"
            disabled={loading}
            onPress={() => signInWithEmail()}
            style={{ width: "100%" }}
          >
            Sign In
          </Button>
        </View>
        <View style={styles.verticallySpaced}>
          <Button
            theme="secondary"
            size="lg"
            disabled={loading}
            onPress={() => signUpWithEmail()}
          >
            Sign Up
          </Button>
        </View>
      </View>
      {/* <View style={styles["mb-5"]}>
        <Button
          title="Toggle Theme"
          onPress={() => {
            UnistylesRuntime.setTheme(
              UnistylesRuntime.themeName === "light" ? "dark" : "light"
            );
          }}
        />
      </View> */}
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors, rounded, spacing }) => ({
  container: {
    backgroundColor: colors.black,
    padding: 12,
    borderWidth: 2,
    borderColor: colors.neutral[800],
    borderRadius: rounded.lg,
    paddingHorizontal: spacing[6],
    paddingTop: spacing[8],
    paddingBottom: spacing[28],
  },
  focused: { borderColor: colors.orange[600] },
  placeholderTextColor: { color: colors.neutral[600] },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  "mt-5": {
    marginTop: 20,
  },
}));
