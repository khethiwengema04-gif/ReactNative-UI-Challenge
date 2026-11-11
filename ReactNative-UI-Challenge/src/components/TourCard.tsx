import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius, scale, shadow } from '../Theme';
import { Tour } from '../types/types';
import FavoriteButton from './FavoriteButton';
import CircleButton from './CircleButton';
import Rating from './Rating';

interface TourCardProps {
    tour: Tour;
    width: number;
    onPress?: () => void;
}

export default function TourCard({ tour, width, onPress }: TourCardProps): React.JSX.Element {
    const imageHeight = width * 0.78;

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.card,
                { width },
                pressed && { backgroundColor: '#FAFAFA' },
            ]}
        >
            <View>
                <Image
                    source={{ uri: tour.image }}
                    style={[styles.image, { height: imageHeight }]}
                    resizeMode="cover"
                />
                <FavoriteButton size={50} style={styles.heart} />
            </View>

            <View style={styles.body}>
                <Text style={styles.title} numberOfLines={1}>
                    {tour.title}
                </Text>
                <Text style={styles.meta} numberOfLines={1}>
                    {tour.days} days  •  from ${tour.price}/person
                </Text>
                <View style={styles.ratingRow}>
                    <Rating value={tour.rating} />
                    <Text style={styles.reviews}>{tour.reviews} reviews</Text>
                </View>
            </View>

            <CircleButton
                size={54}
                variant="dark"
                style={styles.go}
                onPress={onPress}
                accessibilityLabel={`Open ${tour.title}`}
            >
                <Ionicons name="arrow-forward" size={scale(22)} color="#fff" />
            </CircleButton>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: radius.card,
        padding: scale(12),
        ...shadow,
    },
    image: {
        width: '100%',
        borderRadius: radius.cardImage,
        backgroundColor: '#E4E4E7',
    },
    heart: { position: 'absolute', top: scale(12), right: scale(12) },
    body: { paddingTop: scale(14), paddingHorizontal: scale(4), paddingBottom: scale(4) },
    title: {
        fontFamily: fonts.semibold,
        fontSize: scale(18),
        color: colors.text,
    },
    meta: {
        marginTop: scale(4),
        fontFamily: fonts.regular,
        fontSize: scale(14),
        color: colors.textMuted,
    },
    ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: scale(10) },
    reviews: {
        marginLeft: scale(12),
        fontFamily: fonts.regular,
        fontSize: scale(14),
        color: colors.textMuted,
    },
    go: { position: 'absolute', right: scale(14), bottom: scale(14) },
});
