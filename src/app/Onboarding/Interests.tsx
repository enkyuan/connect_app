import React from "react";
import { Pressable } from "react-native";
import { useNavigation, Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function SelectInterestsScreen() {
  return (
    <>
      <SafeAreaView>
        <ThemedText type="title">Select Interests Screen</ThemedText>
        <Link screen="NotFound">
          <ThemedText type="link">Go to not found screen!</ThemedText>
        </Link>
      </SafeAreaView>
    </>
  );
}
