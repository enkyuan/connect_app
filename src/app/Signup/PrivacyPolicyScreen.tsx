import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { CaretLeft } from "phosphor-react-native";

export default function PrivacyPolicyScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 1.2 * insets.top;
  const paddingBottom = insets.bottom;

  return (
    <>
      <View style={{ paddingTop: paddingTop }}>
        <View
          className="mx-[6%] flex flex-row items-center"
          style={{ paddingBottom: paddingBottom }}
        >
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ backgroundColor: Colors.gray }}
            className="rounded-full justify-center items-center h-12 w-12 mr-[4%]"
          >
            <CaretLeft size={24} color="black" />
          </TouchableOpacity>
          <ThemedText type="subtitle">Back to Options</ThemedText>
        </View>
      </View>
    </>
  );
}
