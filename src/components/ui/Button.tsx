import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  TextStyle,
  View,
  StyleSheet,
} from "react-native";

import { Fonts } from "@/constants/Fonts";

interface ButtonProps {
  style?: any;
  text?: string;
  textStyle?: TextStyle;
  icon?: ReactNode;
  onPress?: () => void;
  type?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Button({
  style,
  text,
  textStyle,
  icon,
  onPress,
  type = "sm",
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        type === "sm" ? styles.sm : undefined,
        type === "md" ? styles.md : undefined,
        type === "lg" ? styles.lg : undefined,
        type === "xl" ? styles.xl : undefined,
        type === "full" ? styles.full : undefined,
        style,
      ]}
      onPress={onPress}
      {...rest}
    >
      <View>{icon}</View>
      <Text
        style={[
          type === "sm" ? styles.smText : undefined,
          type === "md" ? styles.mdText : undefined,
          type === "lg" ? styles.lgText : undefined,
          type === "xl" ? styles.xlText : undefined,
          type === "full" ? styles.fullText : undefined,
          style,
          textStyle,
        ]}
        {...rest}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sm: {
    flexDirection: "row",
    height: 40,
    width: "56%",
  },
  smText: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: Fonts.medium,
  },
  md: {
    flexDirection: "row",
    height: 44,
    width: "68%",
  },
  mdText: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: Fonts.semibold,
  },
  lg: {
    flexDirection: "row",
    height: 52,
    width: "80%",
  },
  lgText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.semibold,
  },
  xl: {
    flexDirection: "row",
    height: 60,
    width: "92%",
  },
  xlText: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: Fonts.semibold,
  },
  full: {
    flexDirection: "row",
    height: 60,
    width: "100%",
  },
  fullText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.semibold,
  },
});
