import React from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { colors, scale } from '../Theme';

interface CircleButtonProps {
    children: React.ReactNode;
    onPress?: () => void;
    size?: number;
    variant?: 'light' | 'dark';
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
}

// Round button used for back / favourite / the dark "go" arrow.
export default function CircleButton({
    children,
    onPress,
    size = 50,
    variant = 'light',
    style,
    accessibilityLabel,
}: CircleButtonProps): React.JSX.Element {
    const d = scale(size);
    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
            hitSlop={8}
            style={({ pressed }) => [
                styles.base,
                { width: d, height: d, borderRadius: d / 2 },
                variant === 'dark'
                    ? { backgroundColor: pressed ? colors.darkPressed : colors.dark }
                    : { backgroundColor: pressed ? colors.pressed : colors.surface },
                pressed && { transform: [{ scale: 0.95 }] },
                style,
            ]}
        >
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    base: { alignItems: 'center', justifyContent: 'center' },
});
