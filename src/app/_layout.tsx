/**
 * This file is the root layout and entry point of the application. It is responsible for setting up the initial environment and loading the necessary assets before rendering the application.
 *
 * For automatic app theme, add the following:
 * <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> {...} </ThemeProvider>
 *
 */

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SessionProvider } from "@/components/SessionProvider";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import "react-native-reanimated";
import "@root/global.css";

import { StackNavigation } from "@/app/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from "sonner-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <SessionProvider>
          <StackNavigation />
          <Toaster richColors={true} />
          <StatusBar style="auto" />
        </SessionProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
