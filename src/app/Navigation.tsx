import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import { NavigationContainer } from "@react-navigation/native";
import { useStorageState } from "@/hooks/useStorageState";
import { Slot } from "expo-router";

function StackNavigation() {
  const Stack = createNativeStackNavigator();
  const token = useStorageState("token");
  const isLoading = useStorageState("session");

  if (isLoading) {
    return <Slot />;
  }

  return (
    <>
      <Stack.Navigator
        initialRouteName="LoginOptions"
        screenOptions={{ headerShown: false }}
      >
        {token == null ? (
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
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
}

function TabNavigation() {}

export { StackNavigation, TabNavigation };
