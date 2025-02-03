import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "true";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.andrewgilliland.ReactFit.dev";
  } else if (IS_PREVIEW) {
    return "com.andrewgilliland.ReactFit.preview";
  } else {
    return "com.andrewgilliland.ReactFit";
  }
};

const getAppName = () => {
  if (IS_DEV) {
    return "ReactFit (Dev)";
  } else if (IS_PREVIEW) {
    return "ReactFit (Preview)";
  } else {
    return "ReactFit";
  }
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "ReactFit",
  scheme: "ReactFit",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: getUniqueIdentifier(),
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    "expo-router",
    "expo-secure-store",
    "expo-font",
    [
      "expo-secure-store",
      {
        configureAndroidBackup: true,
        faceIDPermission:
          "Allow ReactFit to access your Face ID biometric data.",
      },
    ],
  ],
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: "da3dfdd8-854c-4838-81b5-9e4cfb791511",
    },
  },
});
