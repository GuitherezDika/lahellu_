import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const DummyScreen = ({ title }: {title: string}) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{title}</Text>
        </View>
    );
};

export default DummyScreen;