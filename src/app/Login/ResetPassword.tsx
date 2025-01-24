// TODO: add forgot password link

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/ThemedText'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Monicon from '@monicon/native'

export default function ResetPasswordScreen() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 0.8 * insets.top;
  const paddingBottom = insets.bottom;

  return (
    <>
      <View style={{ paddingTop: paddingTop }} className="flex flex-col justify-center">
        <View className="mx-[4%]">
          <TouchableOpacity
            onPress={() => navigation.pop()}
            className="bg-gray-200 rounded-full justify-center items-center h-12 w-12"
          >
            <Monicon name="ph:caret-left" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: insets.top }}>
          <View className="items-center mt-[4%] mb-[8%]">
            <ThemedText type="title" className="justify-center">Reset password</ThemedText>
          </View>

          <View className="mx-[8%]">
            <ThemedText type="subtitle">Email</ThemedText>
          </View>

          <View className="items-center my-[2%]">
            <Input type="lg" placeholder="name@address.com"  />
          </View>
          
          <View className="mx-[6%] mt-[50%]" style={{ paddingBottom: paddingBottom }}>
            <View className="items-center my-[12%]">
              <ThemedText type="default">
                We'll send you a link via email to reset your password 
              </ThemedText>
            </View>
            <Button 
              type="full" text="Continue" textStyle={{ color: 'white', textAlign: 'center' }}
              className="bg-black border-1 rounded-full justify-center items-center" 
            />
          </View> 
        </View>
      </View>
    </>
  );
}

