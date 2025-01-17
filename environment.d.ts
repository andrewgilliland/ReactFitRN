declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_SUPABASE_URL: string;
      EXPO_PUBLIC_SUPABASE_ANON_KEY: string;
      EXPO_PUBLIC_DEFAULT_USER_EMAIL: string;
      EXPO_PUBLIC_DEFAULT_USER_PASSWORD: string;
    }
  }
}

export {};
