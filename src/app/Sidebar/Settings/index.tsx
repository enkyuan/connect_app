import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Button } from "@/components/ui/Button";
import Monicon from "@monicon/native";
import { useAuth } from "@/components/SessionProvider";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { signOut } = useAuth();

  const paddingTop = insets.top + 0.2 * insets.top;
  const paddingBottom = insets.bottom + 0.2 * insets.bottom;

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
        <View className="flex flex-col mx-[6%]">         
          <ThemedText type="title" className="justify-center">
            Settings
          </ThemedText>
          <View className="mt-[8%] mb-[42%]">
            <Button
              type="full"
              text="Account"
              icon={
                <Monicon name="ph:arrow-up-right" size={24} color="gray" />
              }
              iconPosition="right"
              textStyle={{ color: "gray", textAlign: "center" }}
              className="bg-transparent border-1 rounded-lg justify-between items-center"
              onPress={() => navigation.navigate("Account")}
            />
            <Button
              type="full"
              text="Notifications"
              icon={
                <Monicon name="ph:arrow-up-right" size={24} color="gray" />
              }
              iconPosition="right"
              textStyle={{ color: "gray", textAlign: "center" }}
              className="bg-transparent border-1 rounded-lg justify-between items-center"
              onPress={() => navigation.navigate("Notifications")}
            />
            <Button
              type="full"
              text="About"
              icon={
                <Monicon name="ph:arrow-up-right" size={24} color="gray" />
              }
              iconPosition="right"
              textStyle={{ color: "gray", textAlign: "center" }}
              className="bg-transparent border-1 rounded-lg justify-between items-center"
              onPress={() => navigation.navigate("About")}
            />
            <Button
              type="full"
              text="Contact us"
              icon={
                <Monicon name="ph:arrow-up-right" size={24} color="gray" />
              }
              iconPosition="right"
              textStyle={{ color: "gray", textAlign: "center" }}
              className="bg-transparent border-1 rounded-lg justify-between items-center"
              onPress={() => navigation.navigate("Contact")}
            />
            <Button
              type="full"
              text="Rate us in the App Store"
              icon={
                <Monicon name="ph:arrow-up-right" size={24} color="gray" />
              }
              iconPosition="right"
              textStyle={{ color: "gray", textAlign: "center" }}
              className="bg-transparent border-1 rounded-lg justify-between items-center"
              onPress={() => navigation.navigate("Rating")}
            />
            <Button
              type="full"
              text="Terms and Privacy"
              icon={
                <Monicon name="ph:arrow-up-right" size={24} color="gray" />
              }
              iconPosition="right"
              textStyle={{ color: "gray", textAlign: "center" }}
              className="bg-transparent border-1 rounded-lg justify-between items-center"
              onPress={() => navigation.navigate("TermsAndPrivacy")}
            />
          </View>
          <Button
              type="full"
              text="Log out"
              textStyle={{ color: "white", textAlign: "center" }}
              className="bg-warning border-1 rounded-full justify-center items-center"
              onPress={() => signOut()}
            />
        </View>
      </View>
    </>
  );
}