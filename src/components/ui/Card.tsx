// TODO: style card component

import { Pressable, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type CardProps = {
  style?: any;
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'md' | 'lg' | 'xl';
};

export function Card({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: CardProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Pressable
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'md' ? styles.md : undefined,
        type === 'lg' ? styles.lg : undefined,
        type === 'xl' ? styles.xl : undefined,
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
  md: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  lg: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  xl: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
