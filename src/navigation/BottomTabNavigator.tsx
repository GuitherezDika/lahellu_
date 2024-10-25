/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopTabNavigator from './TopTabNavigator';
import ProfileTopTabNavigator from './ProfileTopTabNavigator';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/colors';
import DummyScreen from '../components/DummyScreen';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    let {primary, gray} = colors;
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'People') {
                        iconName = focused ? 'people' : 'people-outline';
                    }
                    else if (route.name === 'Tambah') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    else if (route.name === 'Notifikasi') {
                        iconName = focused ? 'notifications-circle' : 'notifications-circle-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} color={color} size={size}/>;
                },
                headerShown: false,
                tabBarActiveTintColor: primary,
                tabBarInactiveTintColor: gray,
            })}
        >
            <BottomTab.Screen name="Home" component={TopTabNavigator} />
            <BottomTab.Screen name="People" component={ProfileTopTabNavigator} />
            <BottomTab.Screen name="Tambah" component={ProfileTopTabNavigator} />
            <BottomTab.Screen name="Notifikasi" component={() => <DummyScreen title="Notifikasi" />} />
            <BottomTab.Screen name="Profile" component={() => <DummyScreen title="Profile" />} />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;
