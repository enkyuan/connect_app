// TODO: add forgot password link

import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation, Link } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/components/SessionProvider";
import Monicon from "@monicon/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 0.8 * insets.top;
  const paddingBottom = insets.bottom + 0.2 * insets.bottom;

  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View
        style={{ paddingTop: paddingTop }}
        className="flex flex-col justify-center"
      >
        <View className="mx-[4%]">
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ backgroundColor: Colors.gray }}
            className="rounded-full justify-center items-center h-12 w-12"
          >
            <Monicon name="ph:caret-left" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: insets.top }}>
          <View className="items-center mt-[4%] mb-[8%]">
            <ThemedText type="title" className="justify-center">
              Sign in with Email
            </ThemedText>
          </View>

          <View className="mx-[8%]">
            <ThemedText type="subtitle">Email</ThemedText>
          </View>

          <View className="items-center my-[2%]">
            <Input
              type="lg"
              placeholder="name@address.com"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View className="mx-[8%]">
            <ThemedText type="subtitle">Password</ThemedText>
          </View>

          <View className="items-center my-[2%]">
            <Input
              type="lg"
              placeholder="your password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />

            <View className="mt-[4%]">
              <ThemedText type="default">
                Forgot password?{" "}
                <Link screen="ResetPassword">
                  <ThemedText type="link">Reset here</ThemedText>
                </Link>
              </ThemedText>
            </View>
          </View>

          <View
            className="mx-[6%] mt-[48%]"
            style={{ paddingBottom: paddingBottom }}
          >
            <Button
              type="full"
              text="Continue"
              textStyle={{ color: "white", textAlign: "center" }}
              className="bg-cornflowerblue-light border-1 rounded-full justify-center items-center"
              onPress={() => {
                signIn(email, password);
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
