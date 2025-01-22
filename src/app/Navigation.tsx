import React, { useEffect, useReducer } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useStorageState } from "@/hooks/useStorageState";
import { Slot } from "expo-router";

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

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const token = useStorageState("token");
  const isLoading = useStorageState("session");

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  if (isLoading) {
    return <Slot />;
  }

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let sessionToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        sessionToken = await SecureStore.getItemAsync("session");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: sessionToken });
    };

    bootstrapAsync();
  }, []);

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
