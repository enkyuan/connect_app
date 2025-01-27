// FIXME: set configuration variables instead of using hardcoded values

exports = function (config) {
  return {
    expo: {
      name: "gather",
      slug: "gather",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./src/assets/images/app/icon.png",
      scheme: "gather",
      userInterfaceStyle: "automatic",
      newArchEnabled: true,
      ios: {
        supportsTablet: false,
        bundleIdentifier: "com.enkyuan.gather",
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./src/assets/images/app/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        bundler: "metro",
        output: "static",
        favicon: "./src/assets/images/app/favicon.png",
      },
      plugins: [
        ["expo-router"],
        ["expo-secure-store"],
        [
          "expo-splash-screen",
          {
            image: "./src/assets/images/app/splash-icon.png",
            imageWidth: 200,
            resizeMode: "contain",
            backgroundColor: "#ffffff",
          },
        ],
        [
          "expo-font",
          {
            fonts: [
              "node_modules/@expo-google-fonts/poppins/Poppins_400Regular.ttf",
              "node_modules/@expo-google-fonts/poppins/Poppins_500Medium.ttf",
              "node_modules/@expo-google-fonts/poppins/Poppins_600SemiBold.ttf",
              "node_modules/@expo-google-fonts/poppins/Poppins_700Bold.ttf",
            ],
          },
        ],
        [
          "@react-native-google-signin/google-signin",
          {
            iosUrlScheme:
              "com.googleusercontent.apps.128786716214-6j1dv2adbcrfhjqa4p2r149eqgr7u5mp",
          },
        ],
        ["react-native-edge-to-edge"],
      ],
      experiments: {
        typedRoutes: true,
      },
    },
  };
};
