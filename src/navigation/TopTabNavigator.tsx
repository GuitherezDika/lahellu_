import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DummyScreen from '../components/DummyScreen';
import HomeScreen from '../screens/HomeScreen';
import FreshScreen from '../screens/FreshScreen';

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Home" component={HomeScreen} />
            <TopTab.Screen name="Fresh" component={FreshScreen} />
            <TopTab.Screen name="Trending" component={() => <DummyScreen title="Trending" />} />
        </TopTab.Navigator>
    );
}

export default TopTabNavigator;