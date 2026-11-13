import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { colors, fonts, scale } from '../Theme';

interface LinkTextProps {
    label: string;
    onPress?: () => void;
    size?: number;
    style?: StyleProp<TextStyle>;
}

// Underlined text link ("Read more", "See all", "143 reviews").
// Changes colour while pressed, like a hover state on the web.
export default function LinkText({
    label,
    onPress,
    size = 15,
    style,
}: LinkTextProps): React.JSX.Element {
    return (
        <Pressable onPress={onPress} hitSlop={8} accessibilityRole="link">
            {({ pressed }) => (
                <Text
                    style={[
                        styles.text,
                        { fontSize: scale(size), color: pressed ? colors.textMuted : colors.text },
                        style,
                    ]}
                >
                    {label}
                </Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.medium,
        textDecorationLine: 'underline',
    },
});
