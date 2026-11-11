import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, scale } from '../Theme';

interface RatingProps {
    value: string;
    pill?: boolean;
    style?: StyleProp<ViewStyle>;
}

// Star + score. `pill` draws the bordered capsule used next to the title.
export default function Rating({
    value,
    pill = false,
    style,
}: RatingProps): React.JSX.Element {
    return (
        <View style={[styles.row, pill && styles.pill, style]}>
            <Ionicons name="star-outline" size={scale(pill ? 17 : 16)} color={colors.text} />
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center' },
    pill: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 999,
        paddingHorizontal: scale(12),
        paddingVertical: scale(5),
    },
    value: {
        marginLeft: scale(5),
        fontFamily: fonts.medium,
        fontSize: scale(14),
        color: colors.text,
    },
});
