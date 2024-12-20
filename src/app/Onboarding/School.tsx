import React from "react";
import { Pressable } from "react-native";
import { useNavigation, Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

import NotFoundScreen from "@/app/NotFound";

export default function SelectSchoolScreen() {
  return (
    <>
      <SafeAreaView>
        <ThemedText type="title">Select School Screen</ThemedText>
        <Link screen="NotFound">
          <ThemedText type="link">Go to not found screen!</ThemedText>
        </Link>
      </SafeAreaView>
    </>
  );
}
