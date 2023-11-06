import React from 'react';
import { Starting } from './starting';
import { Transition } from './transition';
import { Authorization } from './authorization';
import { Subscription } from './subscription';

import { createStackNavigator } from '@react-navigation/stack';

const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

const Stack = createStackNavigator();
export default function Navigate() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name = "starting"
            component = {Starting}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "Transition"
            component = {Transition}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "Authorization"
            component = {Authorization}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "Subscription"
            component = {Subscription}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}