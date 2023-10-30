import React from 'react';
import { Starting } from './starting';
import { Authorization } from './authorization';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name = "Starting"
            component = {Starting}
            />
            <Stack.Screen
            name = "Authorization"
            component = {Authorization}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}