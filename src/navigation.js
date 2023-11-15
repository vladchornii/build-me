import React from 'react';
import { Starting } from './starting';
import { Transition } from './transition';
import { Authorization } from './authorization';
import { Subscription } from './subscription';
import { Registration} from './registration';
import { FirstChoice } from './firstChoice';
import { YourChoicePremisesLandscape } from './yourChoicePrLa';
import { YourChoiceRoadWorks } from './yourChoiseRoad';
import { MoreDetailedChoicePremisesLandscape } from './moreDetailedChoicePrLa';
import { createStackNavigator } from '@react-navigation/stack';
import { SmallRoom } from './smallRoom';
import { Walls } from './walls';
import { Tile } from './tile';


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
            <Stack.Screen
            name = "Registration"
            component = {Registration}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "FirstChoice"
            component = {FirstChoice}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "YourChoicePremisesLandscape"
            component = {YourChoicePremisesLandscape}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "YourChoiceRoadWorks"
            component = {YourChoiceRoadWorks}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "MoreDetailedChoicePremisesLandscape"
            component = {MoreDetailedChoicePremisesLandscape}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "SmallRoom"
            component = {SmallRoom}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "Walls"
            component = {Walls}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "Tile"
            component = {Tile}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}