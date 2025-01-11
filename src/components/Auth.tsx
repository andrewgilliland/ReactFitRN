import { useState } from "react";
import { Alert, View, AppState, Button, TextInput } from "react-native";
import { supabase } from "../lib/supabase";

import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from "react-native-unistyles";
import ThemedTextInput from "./Inputs/ThemedTextInput";

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

export default function Auth() {
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
      <View style={[styles.verticallySpaced, styles["mt-5"]]}>
        <View>
          <ThemedTextInput valueState={[email, setEmail]} placeholder="Email" />
        </View>
        <View style={styles.verticallySpaced}>
          <ThemedTextInput
            valueState={[password, setPassword]}
            placeholder="Password"
          />
        </View>
        <View style={[styles.verticallySpaced, styles["mt-5"]]}>
          <Button
            title="Sign in"
            disabled={loading}
            onPress={() => signInWithEmail()}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Button
            title="Sign up"
            disabled={loading}
            onPress={() => signUpWithEmail()}
          />
        </View>
      </View>
      <View style={styles["mb-5"]}>
        <Button
          title="Toggle Theme"
          onPress={() => {
            UnistylesRuntime.setTheme(
              UnistylesRuntime.themeName === "light" ? "dark" : "light"
            );
          }}
        />
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(({ colors, font, rounded, spacing }) => ({
  container: {
    backgroundColor: colors.black,
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 40,
    padding: 12,
  },
  textInput: {
    backgroundColor: colors.neutral[800],
    color: colors.neutral[100],
    borderWidth: spacing["0.5"],
    borderRadius: rounded.xl,
    fontSize: font.size.base,
    fontWeight: "500",
    padding: spacing[3],
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
  "mb-5": {
    marginBottom: 20,
  },
}));
