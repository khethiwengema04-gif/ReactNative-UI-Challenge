import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, scale } from '../theme';
import LinkText from './LinkText';

interface SectionHeaderProps {
    title: string;
    actionLabel?: string;
    onActionPress?: () => void;
}

export default function SectionHeader({
    title,
    actionLabel,
    onActionPress,
}: SectionHeaderProps): React.JSX.Element {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            {actionLabel ? <LinkText label={actionLabel} onPress={onActionPress} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: fonts.semibold,
        fontSize: scale(22),
        letterSpacing: -0.3,
        color: colors.text,
    },
});
