import { useState, useEffect } from "react";
import { View } from "react-native";
import { supabase } from "../src/lib/supabase";
import { useFonts } from "expo-font";
import { Session } from "@supabase/supabase-js";
import LoginScreen from "@/src/screens/LoginScreen";
import { customFontsToLoad } from "@/styles";
import { Redirect } from "expo-router";

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
      {session && session.user ? <Redirect href="(tabs)" /> : <LoginScreen />}
    </View>
  );
}
