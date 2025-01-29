// TODO: style badge component

import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, TextStyle } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Fonts } from "@/constants/Fonts";

type BadgeProps = {
  text?: string;
  textStyle?: TextStyle;
  style?: any;
  icon?: ReactNode;
  lightColor?: string;
  darkColor?: string;
  type?: "md" | "lg";
};

export function Badge({
  style,
  icon,
  text,
  textStyle,
  lightColor,
  darkColor,
  type = "md",
  ...rest
}: ButtonProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Pressable
      style={[
        { color },
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
    backgroundColor: "#3655DB",
    width: "15%",
    height: 21,
  },
  lg: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },

  mdTxt:{
    fontSize: 12,
    fontWeight: "600",
    fontFamily: Fonts.medium,
  }
});
