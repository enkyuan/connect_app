import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import Monicon from "@monicon/native";

export default function ExistingAccountScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = 0.6 * insets.top;
  const paddingBottom = insets.bottom;

  return (
    <>
      <View style={{ paddingTop: paddingTop }}>
        <View
          className="mx-[6%] flex flex-row justify-between items-center align-middle"
          style={{ paddingBottom: paddingBottom }}
        >
          <ThemedText type="subtitle" className="justify-center text-center">
            Login to an existing account
          </ThemedText>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ backgroundColor: Colors.gray }}
            className="rounded-full justify-center items-center h-12 w-12"
          >
            <Monicon name="ph:x" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}