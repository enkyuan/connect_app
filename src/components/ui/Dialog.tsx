// TODO: style dialogue component

import React, { ReactNode } from "react";
import { Pressable, StyleSheet, TextStyle } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type DialogProps = {
  style?: any;
  icon?: ReactNode;
  text?: string;
  actions?: ReactNode;
  textStyle?: TextStyle;
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "action" | "alert";
};

export function Dialog({
  style,
  icon,
  text,
  actions,
  textStyle,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: DialogProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Pressable
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "action" ? styles.action : undefined,
        type === "alert" ? styles.alert : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  action: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  alert: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
});
