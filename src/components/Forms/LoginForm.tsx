import { useState } from "react";
import { Alert, View, AppState, Pressable } from "react-native";
import {
  resetPasswordForEmail,
  signInWithEmail,
  supabase,
} from "../../lib/supabase";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Button, Text, TextInput } from "@/components";
import { spacing } from "@/styles";
import { router } from "expo-router";

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

  const defaultUser = {
    email: process.env.EXPO_PUBLIC_DEFAULT_USER_EMAIL || "",
    password: process.env.EXPO_PUBLIC_DEFAULT_USER_PASSWORD || "",
  };

  const [email, setEmail] = useState(defaultUser.email);
  const [password, setPassword] = useState(defaultUser.password);
  const [loading, setLoading] = useState(false);

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
          <TextInput
            valueState={[email, setEmail]}
            autoCapitalize={"none"}
            label="Email"
          />
        </View>
        <View style={styles.verticallySpaced}>
          <TextInput
            valueState={[password, setPassword]}
            autoCapitalize={"none"}
            label="Password"
            secureTextEntry
          />
          <View
            style={{
              marginTop: spacing[1],
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: spacing[1],
            }}
          >
            <Text color="neutral.400" weight="medium" size="sm">
              Forgot your password, reset your email
            </Text>
            <Pressable
              style={{
                padding: 4,
                borderRadius: 12,
                borderColor: "white",
                borderWidth: 1,
              }}
              onPress={async () => {
                console.log("Word up");
                const { data, error } = await resetPasswordForEmail(email);

                if (error) {
                  Alert.alert(error.message);
                } else {
                  Alert.alert("Password reset email sent");
                }
              }}
            >
              <Text color="neutral.100" weight="bold" size="base" style={{}}>
                Here
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.verticallySpaced, styles["mt-5"]]}>
          <Button
            theme="primary"
            size="lg"
            disabled={loading}
            onPress={async () => {
              setLoading(true);
              const error = await signInWithEmail(email, password);
              if (error) Alert.alert(error.message);
              if (!error) {
                // router.push("(tabs)");
              }
              setLoading(false);
            }}
            style={{ width: "100%" }}
          >
            Login
          </Button>
        </View>
        <View style={styles.verticallySpaced}>
          <Text family="body" color="neutral.400" size="sm" weight="medium">
            Don't have an account?
          </Text>
        </View>
      </View>
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
