import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import Monicon from "@monicon/native";
import { Button } from "@/components/ui/Button";

export default function AddAccountScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 0.2 * insets.top;
  const paddingBottom = 0.6 * insets.bottom;

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
        <View className="flex flex-col justify-center">         
          <ThemedText type="title" className="justify-center ml-[8%]">
            Add Account
          </ThemedText>
          <View className="items-center mt-[32%] px-[4%]">
            <Monicon name="ph:confetti-bold" size={64} color="#6495ED" />
            <ThemedText type="subtitle" className="mt-[4%] mb-[24%]">
              Hundreds of Events. {"\n"}
              All on Gather.
            </ThemedText>
            <Button
              type="xl"
              text="Create a new account"
              textStyle={{ color: "white" }}
              onPress={() => navigation.navigate("CreateNewAccount")}
              className="bg-cornflowerblue-light rounded-full justify-start items-center mx-[10%] my-[2%]"
            />
            <Button
              type="xl"
              text="Login to an existing one"
              onPress={() => navigation.navigate("ExistingAccount")}
              className="bg-white rounded-full justify-start items-center mx-[10%] my-[2%]"
            />
            <ThemedText type="defaultSemiBold" className="mx-[2%] my-[8%]">
              While you're signed in, anyone else using this device can access your account.
            </ThemedText>
          </View>
        </View>
      </View>
    </>
  );
}