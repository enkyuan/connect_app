// TODO: password confirm function in useAuth hook

import React from "react";
import { View } from "react-native";
import { useAuth } from "@/components/SessionProvider";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Button } from "@/components/ui/Button";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 1.2 * insets.top;
  const paddingBottom = insets.bottom;

  const { signOut } = useAuth();

  return (
    <>
      <View
        style={{ paddingTop: paddingTop }}
        className="flex flex-col justify-center"
      >
        <View className="mx-[6%]" style={{ paddingBottom: paddingBottom }}>
          <ThemedText type="title" className="justify-center">
            Home Screen
          </ThemedText>
          <View className="mt-[4%]">
            <Button
              type="full"
              text="Sign out"
              textStyle={{ color: "white", textAlign: "center" }}
              className="bg-warning border-1 rounded-full justify-center items-center"
              onPress={() => signOut()}
            />
          </View>
        </View>
      </View>
    </>
  );
}
