import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DummyScreen from '../components/DummyScreen';

const TopTabProfile = createMaterialTopTabNavigator();

function ProfileTopTabNavigator() {
    return (
        <TopTabProfile.Navigator>
            <TopTabProfile.Screen name="Topik" component={() => <DummyScreen title="Topik" />} />
            <TopTabProfile.Screen name="Sudah Gabung" component={() => <DummyScreen title="Sudah Gabung" />} />
        </TopTabProfile.Navigator>
    );
}

export default ProfileTopTabNavigator;