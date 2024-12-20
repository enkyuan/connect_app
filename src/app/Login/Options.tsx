// TODO: add custom colors to tailwind configuration
// FIXME: convert svg images to react components

import React from "react";
import { Link } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/ui/Button";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function LoginOptionsScreen() {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 1.6 * insets.top;

  const navigation = useNavigation();
  const auth = useAuth();

  return (
    <>
      <View
        style={{ paddingTop: paddingTop }}
        className="flex flex-col justify-center mx-[8%]"
      >
        <Image
          source={require("@/assets/images/gather-logo.png")}
          className="flex w-24 h-24 my-[12%]"
        />

        <Button
          type="full"
          text="Sign up"
          textStyle={{ color: "white", textAlign: "center" }}
          className="bg-cornflowerblue-light rounded-full my-2 justify-center items-center"
          onPress={() => navigation.navigate("Signup")}
        />

        <Button
          type="full"
          text="Continue with Google"
          textStyle={{ color: "black", textAlign: "center" }}
          icon={<FontAwesome6 name="google" size={28} color="black" />}
          className="bg-white pl-[10%] border-1 rounded-full my-2 items-center"
          onPress={() => auth.handleOAuth("google")}
        />

        <Button
          type="full"
          text="Continue with Apple"
          textStyle={{ color: "black", textAlign: "center" }}
          icon={<FontAwesome6 name="apple" size={36} color="black" />}
          className="bg-white pl-[10%] border-1 rounded-full my-2 items-center"
        />

        <Button
          type="full"
          text="Continue with Instagram"
          textStyle={{ color: "black", textAlign: "center" }}
          icon={<FontAwesome6 name="instagram" size={28} color="black" />}
          className="bg-white pl-[10%] border-1 rounded-full my-2 items-center"
          onPress={() => auth.handleOAuth("instagram")}
        />

        <View className="text-nowrap my-4">
          <ThemedText type="default">
            Already have an account?{" "}
            <Link screen="Login">
              <ThemedText type="link">Log in</ThemedText>
            </Link>
          </ThemedText>
        </View>

        <ThemedText
          type="default"
          className="text-sm text-wrap text-gray-500 my-8"
        >
          By signing up, you agree to our{" "}
          <Link screen="Terms">
            <ThemedText type="link">terms </ThemedText>
          </Link>
          and{" "}
          <Link screen="PrivacyPolicy">
            <ThemedText type="link">privacy policy </ThemedText>
          </Link>
        </ThemedText>
      </View>
    </>
  );
}
