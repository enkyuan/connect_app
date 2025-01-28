import React from "react";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

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
