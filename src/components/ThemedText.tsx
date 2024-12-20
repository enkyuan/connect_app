import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

interface ThemedTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
}

export const ThemedText = React.forwardRef<Text, ThemedTextProps>(
  ({ style, lightColor, darkColor, type = "default", ...rest }, ref) => {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return (
      <Text
        ref={ref}
        style={[
          { color },
          type === "default" ? styles.default : undefined,
          type === "title" ? styles.title : undefined,
          type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
          type === "subtitle" ? styles.subtitle : undefined,
          type === "link" ? styles.link : undefined,
          style,
        ]}
        {...rest}
      />
    );
  },
);

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.regular,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.semibold,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: Fonts.bold,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: Fonts.bold,
  },
  link: {
    fontSize: 16,
    lineHeight: 32,
    fontFamily: Fonts.bold,
    color: Colors.light.blue,
  },
});
