// TODO: password confirm function in useAuth hook

import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";

export default function NewEventScreen() {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 1.2 * insets.top;
  const paddingBottom = insets.bottom;

  return (
    <>
      <View
        style={{ paddingTop: paddingTop }}
        className="flex flex-col justify-center"
      >
        <View className="mx-[6%]" style={{ paddingBottom: paddingBottom }}>
          <ThemedText type="title" className="justify-center">
            New Event Screen
          </ThemedText>
        </View>
      </View>
    </>
  );
}