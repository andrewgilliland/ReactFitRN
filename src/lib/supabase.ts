import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "";

const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export const signInWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: password,
  });

  return error;
};

export const resetPasswordForEmail = async (email: string) =>
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://example.com/update-password",
  });

export const signOut = async () => await supabase.auth.signOut();

export const getProfileByUserId = async (userId: string) =>
  await supabase
    .from("profiles")
    .select(`username, website, avatar_url`)
    .eq("id", userId)
    .single();

export const upsertProfile = async (updates: {
  id: string;
  username: string;
  website: string;
  avatar_url: string;
  updated_at: Date;
}) => await supabase.from("profiles").upsert(updates);

export const getAllExercises = async () =>
  await supabase.from("exercises").select("*");

export const getExerciseById = async (id: string) =>
  await supabase.from("exercises").select("*").eq("id", id).single();
