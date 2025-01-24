// TODO: add custom colors to tailwind configuration
// FIXME: convert svg images to react components

import React from "react";
import { Link } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/components/SessionProvider";

import { Button } from "@/components/ui/Button";
import { ThemedText } from "@/components/ThemedText";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Monicon from "@monicon/native";

export default function LoginOptionsScreen() {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 1.6 * insets.top;

  const navigation = useNavigation();
  const { oauth } = useAuth();

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
          icon={<Monicon name="fa6-brands:google" size={28} color="black" />}
          className="bg-white pl-[10%] border-1 rounded-full my-2 items-center"
          onPress={() => oauth('google')}
        />

        <Button
          type="full"
          text="Continue with Apple"
          textStyle={{ color: "black", textAlign: "center" }}
          icon={<Monicon name="fa6-brands:apple" size={32} color="black" />}
          className="bg-white pl-[10%] border-1 rounded-full my-2 items-center"
        />

        <Button
          type="full"
          text="Continue with Instagram"
          textStyle={{ color: "black", textAlign: "center" }}
          icon={<Monicon name="fa6-brands:instagram" size={28} color="black" />}
          className="bg-white pl-[10%] border-1 rounded-full my-2 items-center"
          onPress={() => oauth('instagram')}
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
