import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import DummyScreen from '../components/DummyScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{}}>
            <Drawer.Screen name="Lahelu" component={BottomTabNavigator} />
            <Drawer.Screen name="Meme Lain" component={() => <DummyScreen title="Meme Lain" />} />
            <Drawer.Screen name="Jelajah" component={() => <DummyScreen title="Explore Screen" />} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
