import { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Session } from "@supabase/supabase-js";
import { Button, TextInput } from "@/components";
import { getProfileByUserId, signOut, upsertProfile } from "../lib/supabase";

const UserScreen = ({ session }: { session: Session }) => {
  const { styles } = useStyles(stylesheet);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await getProfileByUserId(
        session?.user.id
      );

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string;
    website: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await upsertProfile(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={[styles.verticallySpaced, styles["mt-5"]]}>
        <TextInput
          label="Email"
          valueState={[session?.user?.email || "", () => {}]}
          editable={false}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          label="Username"
          valueState={[username, setUsername]}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          label="Website"
          valueState={[website, setWebsite]}
          onChangeText={(text) => setWebsite(text)}
        />
      </View>

      <View style={[styles.verticallySpaced, styles["mt-5"]]}>
        <Button
          size="lg"
          onPress={() =>
            updateProfile({ username, website, avatar_url: avatarUrl })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </Button>
      </View>

      <View style={styles.verticallySpaced}>
        <Button color="neutral.700" size="lg" onPress={() => signOut()}>
          Sign Out
        </Button>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, spacing }) => ({
  screen: {
    height: "100%",
    backgroundColor: colors.black,
    paddingHorizontal: spacing[6],
    paddingTop: spacing[8],
    paddingBottom: spacing[28],
  },

  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  "mt-5": {
    marginTop: 20,
  },
}));

export default UserScreen;
