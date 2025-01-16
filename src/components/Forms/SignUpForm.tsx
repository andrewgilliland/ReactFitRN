import { useState } from "react";
import { Alert, View, AppState } from "react-native";
import { supabase } from "../../lib/supabase";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { TextInput, Text } from "@/components";
import Button from "../Button";

import { spacing } from "@/src/style";

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

const SignUpForm = () => {
  const { styles } = useStyles(stylesheet);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
          Sign Up
        </Text>
        <Text
          family="body"
          color="neutral.400"
          size="sm"
          weight="medium"
          style={{ marginTop: spacing[2] }}
        >
          Enter your email below to sign up for your account
        </Text>
      </View>
      <View style={{ marginTop: spacing[12] }}>
        <View>
          <TextInput
            valueState={[email, setEmail]}
            autoCapitalize={"none"}
            label="Email"
          />
        </View>
        <View style={{ marginTop: spacing[2] }}>
          <TextInput
            valueState={[password, setPassword]}
            autoCapitalize={"none"}
            label="Password"
            secureTextEntry
          />
          <TextInput
            valueState={[confirmPassword, setConfirmPassword]}
            autoCapitalize={"none"}
            label="Confirm Password"
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: spacing[12] }}>
          <Text family="body" color="neutral.400" size="sm" weight="medium">
            Don't have an account?
          </Text>
          <Button
            theme="secondary"
            size="lg"
            disabled={loading}
            onPress={() => signUpWithEmail()}
            style={{ marginTop: spacing[4], width: "100%" }}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

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

export default SignUpForm;
