// TODO: style badge component

import React, { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type BadgeProps = {
  style?: any;
  icon?: ReactNode;
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "md" | "lg";
};

export function Badge({
  style,
  icon,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ButtonProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Pressable
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "md" ? styles.md : undefined,
        type === "lg" ? styles.lg : undefined,
        style,
      ]}
      {...rest}     
    >
      <Text
      style={[
        type === "md"? styles.mdTxt : undefined,
        style,
        textStyle,
      ]}
      >{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  md: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  lg: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
