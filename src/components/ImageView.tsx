import { View, Image } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import { dataPropType } from '../types';

export const ImageView = ({source}: {source: dataPropType
}) => {
    return (
        <View>
            <Image
                source={{uri: source.uri}}
                style={globalStyles.imgView}
            />
        </View>
    );
};
