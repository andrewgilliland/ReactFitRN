import { useState, useEffect } from "react";
import { supabase } from "./src/lib/supabase";
import LoginForm from "./src/components/Forms/LoginForm";
import UserScreem from "./src/screens/UserScreen";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import "@/src/styles/unistyles";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View>
      {session && session.user ? (
        <UserScreem key={session.user.id} session={session} />
      ) : (
        <LoginForm />
      )}
    </View>
  );
}
