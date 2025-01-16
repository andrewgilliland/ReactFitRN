import { useState, useEffect } from "react";
import { supabase } from "../src/lib/supabase";
import { useFonts } from "expo-font";
import {
  WorkSans_500Medium as workSansMedium,
  WorkSans_600SemiBold as workSansSemiBold,
  WorkSans_700Bold as workSansBold,
} from "@expo-google-fonts/work-sans";
import UserScreem from "../src/screens/UserScreen";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import SignUpScreen from "@/src/screens/SignUpScreen";
import LoginScreen from "@/src/screens/LoginScreen";

const customFontsToLoad = {
  workSansMedium,
  workSansSemiBold,
  workSansBold,
};

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [areFontsLoaded, fontLoadError] = useFonts(customFontsToLoad);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    console.log("App.tsx: supabase.auth.onAuthStateChange");

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    console.log("session: ", session);
  }, []);

  // TODO Add a SplashScreen
  if (!areFontsLoaded && !fontLoadError) {
    return null;
  }

  return (
    <View>
      {session && session.user ? (
        <UserScreem key={session.user.id} session={session} />
      ) : (
        // <AppNavigator /> Tabs go here
        <LoginScreen />
        // <AuthNavigator /> Stack goes here
      )}
    </View>
  );
}
