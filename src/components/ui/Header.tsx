// TODO: add pressable (with icon) & textProps

import { Pressable, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type HeaderProps = {
  style?: any;
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "fixed" | "sticky" | "expanded";
};

export function Header({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: HeaderProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Pressable
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "fixed" ? styles.fixed : undefined,
        type === "sticky" ? styles.sticky : undefined,
        type === "expanded" ? styles.expanded : undefined,
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
  fixed: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  sticky: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  expanded: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
