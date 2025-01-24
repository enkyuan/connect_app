import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import Monicon from "@monicon/native";

export default function AddAccountScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 0.4 * insets.top;
  const paddingBottom = insets.bottom;

  return (
    <>
      <View style={{ paddingTop: paddingTop }}>
        <View
          className="mx-[6%] flex flex-row items-center"
          style={{ paddingBottom: paddingBottom }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: Colors.gray }}
            className="rounded-full justify-center items-center h-12 w-12 mr-[4%]"
          >
            <Monicon name="ph:x" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="ml-[8%]">         
          <ThemedText type="title" className="justify-center">
            Add Account
          </ThemedText>
        </View>
      </View>
    </>
  );
}