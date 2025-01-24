// TODO: use SessionProvider component to implement protected routes

import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useAuth } from "@/components/SessionProvider";
import { Monicon } from "@monicon/native";

import NotFoundScreen from "@/app/NotFound";
import OnboardingScreen from "@/app/Onboarding/";
import HomeScreen from "@/app/Feeds/";

import LoginScreen from "@/app/Login/";
import LoginOptionsScreen from "@/app/Login/Options";
import NewPasswordScreen from "@/app/Login/NewPassword";
import ResetPasswordScreen from "@/app/Login/ResetPassword";

import SignupScreen from "@/app/Signup/";
import TermsScreen from "@/app/Signup/Terms";
import PrivacyPolicyScreen from "@/app/Signup/PrivacyPolicyScreen";

import ProfileScreen from "@/app/Sidebar/Profile";
import RecentsScreen from "@/app/Sidebar/Recents";
import SettingsScreen from "@/app/Sidebar/Settings";
import AddAccountScreen from "@/app/Sidebar/AddAccount/";

import AccountScreen from "@/app/Sidebar/Settings/Account";
import NotificationsScreen from "@/app/Sidebar/Settings/Notifications";
import ContactScreen from "@/app/Sidebar/Settings/Contact";
import AboutScreen from "@/app/Sidebar/Settings/About";
import RatingScreen from "@/app/Sidebar/Settings/Rating";
import TermsAndPrivacyScreen from "@/app/Sidebar/Settings/TermsAndPrivacy";

import ExistingAccountScreen from "@/app/Sidebar/AddAccount/ExistingAccount";
import CreateNewAccountScreen from "@/app/Sidebar/AddAccount/CreateNewAccount";

function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  
  return (
    <Drawer.Navigator screenOptions={{ 
      headerShown: false,
      swipeEdgeWidth: 80,
      drawerInactiveTintColor: Colors.night,
      drawerActiveTintColor: Colors.light.blue,
      drawerStyle: {
        width: 290,
        maxWidth: 300
      }
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
      <Drawer.Screen name="Add Account" component={AddAccountScreen} options={{
        drawerLabelStyle: {
          fontSize: 20,
          fontFamily: Fonts.semibold
        },
        drawerIcon: ({ color }) => (
          <Monicon name="ph:plus-circle-bold" size={32} color={color} />
        )
      }} />
      <Drawer.Screen name="Recents" component={RecentsScreen} options={{
        drawerLabelStyle: {
          fontSize: 20,
          fontFamily: Fonts.semibold
        },
        drawerIcon: ({ color }) => (
          <Monicon name="ph:clock-countdown-bold" size={32} color={color} />
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

export default function RootNavigation() {
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
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Rating" component={RatingScreen} />
            <Stack.Screen name="TermsAndPrivacy" component={TermsAndPrivacyScreen} />
            <Stack.Screen name="CreateNewAccount" component={CreateNewAccountScreen} />
            <Stack.Screen name="ExistingAccount" component={ExistingAccountScreen} />
          </Stack.Group>
        </>
      )}
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}