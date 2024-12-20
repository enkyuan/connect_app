// TODO: add color #E5E7EB to the colors defined in constants/Colors.ts

import React from "react";
import {
  TextInput,
  Text,
  TextStyle,
  TextInputProps,
  View,
  StyleSheet,
} from "react-native";

import { Fonts } from "@/constants/Fonts";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

interface InputProps extends TextInputProps {
  text?: string;
  textStyle?: TextStyle;
  type?: "sm" | "md" | "lg";
}

export function Input({
  style,
  text,
  textStyle,
  type = "sm",
  ...rest
}: InputProps) {
  return (
    <TextInput
      style={[
        type === "sm" ? styles.sm : undefined,
        type === "md" ? styles.md : undefined,
        type === "lg" ? styles.lg : undefined,
        style,
      ]}
      autoCapitalize="none"
      autoCorrect={false}
      {...rest}
    >
      <Text
        style={[
          type === "sm" ? styles.smText : undefined,
          type === "md" ? styles.mdText : undefined,
          type === "lg" ? styles.lgText : undefined,
          style,
          textStyle,
        ]}
        {...rest}
      >
        {text}
      </Text>
    </TextInput>
  );
}

const styles = StyleSheet.create({
  sm: {
    flexDirection: "row",
    backgroundColor: Colors.gray,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: "44",
    width: "68%",
  },
  smText: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: Fonts.semibold,
  },
  md: {
    flexDirection: "row",
    backgroundColor: Colors.gray,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: "52",
    width: "76%",
  },
  mdText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.semibold,
  },
  lg: {
    flexDirection: "row",
    backgroundColor: Colors.gray,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: "60",
    width: "88%",
  },
  lgText: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: Fonts.semibold,
  },
});
