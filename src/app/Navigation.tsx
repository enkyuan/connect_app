// TODO: use SessionProvider component to implement protected routes

import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { Colors } from "@/constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useAuth } from "@/components/SessionProvider";
import { Monicon } from "@monicon/native";

import NotFoundScreen from "@/app/NotFound";
import HomeScreen from "@/app/Feeds/";
import LoginScreen from "@/app/Login/";
import LoginOptionsScreen from "@/app/Login/Options";
import NewPasswordScreen from "@/app/Login/NewPassword";
import OnboardingScreen from "@/app/Onboarding/";
import ResetPasswordScreen from "@/app/Login/ResetPassword";
import SignupScreen from "@/app/Signup/";
import TermsScreen from "@/app/Signup/Terms";
import PrivacyPolicyScreen from "@/app/Signup/PrivacyPolicyScreen";
import ProfileScreen from "@/app/UserOptions/Profile";
import RecentsScreen from "@/app/UserOptions/Recents";
import SettingsScreen from "@/app/UserOptions/";
import { Fonts } from "@/constants/Fonts";

export function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  
  return (
    <Drawer.Navigator screenOptions={{ 
      headerShown: false,
      drawerInactiveTintColor: Colors.night,
      drawerActiveTintColor: Colors.light.blue
     }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerItemStyle: { display: "none" }}} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{
        drawerLabelStyle: {
          fontSize: 20,
          fontFamily: Fonts.semibold
        },
        drawerIcon: ({ color }) => (
          <Monicon name="ph:user-circle-bold" size={32} color={color} />
        )
      }} />
      <Drawer.Screen name="Recents" component={RecentsScreen} options={{
        drawerLabelStyle: {
          fontSize: 20,
          fontFamily: Fonts.semibold
        },
        drawerIcon: ({ color }) => (
          <Monicon name="ph:clock-bold" size={32} color={color} />
        )
      }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{
        drawerLabelStyle: {
          fontSize: 20,
          fontFamily: Fonts.semibold
        },
        drawerIcon: ({ color }) => (
          <Monicon name="ph:gear-bold" size={32} color={color} />
        )
      }} />
    </Drawer.Navigator>
  );
}

export function RootNavigation() {
  const Stack = createNativeStackNavigator();
  const { session, isLoading } = useAuth();

  if (isLoading) {
    SplashScreen.preventAutoHideAsync();
  }

  return (
    <Stack.Navigator
      initialRouteName="LoginOptions"
      screenOptions={{ headerShown: false }}
    >
      {!session ? (
        <>
          <Stack.Screen name="LoginOptions" component={LoginOptionsScreen} />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Terms" component={TermsScreen} />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicyScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </>
      )}
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}