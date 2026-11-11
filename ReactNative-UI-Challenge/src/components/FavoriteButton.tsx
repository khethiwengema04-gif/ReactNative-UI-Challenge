import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CircleButton from './CircleButton';
import { scale } from '../Theme';

interface FavoriteButtonProps {
    size?: number;
    style?: StyleProp<ViewStyle>;
}

// Heart toggle, reused on the hero image and on every tour card.
export default function FavoriteButton({
    size = 50,
    style,
}: FavoriteButtonProps): React.JSX.Element {
    const [liked, setLiked] = useState<boolean>(false);
    return (
        <CircleButton
            size={size}
            style={style}
            onPress={() => setLiked((v) => !v)}
            accessibilityLabel={liked ? 'Remove from favourites' : 'Add to favourites'}
        >
            <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={scale(size * 0.5)}
                color={liked ? '#E5484D' : '#1B1B1D'}
            />
        </CircleButton>
    );
}
