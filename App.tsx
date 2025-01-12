import { useState, useEffect } from "react";
import { supabase } from "./src/lib/supabase";
import LoginForm from "./src/components/LoginForm";
import Account from "./src/components/Account";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import "@/src/style/unistyles";

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
        <Account key={session.user.id} session={session} />
      ) : (
        <LoginForm />
      )}
    </View>
  );
}
