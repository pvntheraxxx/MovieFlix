import "dotenv/config";

export default {
  expo: {
    name: "MovieFlix",
    slug: "movieflix",
    owner: "pvntheraxxx",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/logo.png",
    scheme: "mobilemovieapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.pvntheraxxx.movieflix",
      adaptiveIcon: {
        foregroundImage: "./assets/images/logo.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/logo.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/logo.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },

    updates: {
      url: "https://u.expo.dev/5bb04344-9264-417c-83c4-35ad9c9855f9",
    },
    runtimeVersion: {
      policy: "appVersion",
    },

    extra: {
      EXPO_PUBLIC_MOVIE_API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
      eas: {
        projectId: "5bb04344-9264-417c-83c4-35ad9c9855f9",
      },
    },
  },
};
