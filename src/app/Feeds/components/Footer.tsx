import { View } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

export function Footer({ state, descriptors, navigation }: BottomTabBarProps) {
  // const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const insets = useSafeAreaInsets();

  return (
    <View 
      className="absolute bottom-0 left-0 right-0 bg-white"
      style={{
        paddingTop: 0.1 * insets.top,
        paddingBottom: 0.8 * insets.bottom,
      }}
    >
      <BlurView intensity={80} tint="default" className="flex-row" style={{
        backgroundColor: "transparent",
        overflow: "hidden",
      }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              key={route.key}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              className="flex-1 items-center justify-center py-2"
            >
              {options.tabBarIcon && options.tabBarIcon({ 
                focused: isFocused,
                color: isFocused ? Colors.light.blue : Colors.night,
                size: 24
              })}
              <Text
                className="text-xs mt-1"
                style={{ 
                  color: isFocused ? Colors.light.blue : Colors.night,
                  fontFamily: Fonts.medium
                }}
              >
                {label as string}
              </Text>
            </PlatformPressable>
          );
        })}
      </BlurView>
    </View>
  );
}