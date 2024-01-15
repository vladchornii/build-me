import React from 'react';
import { Starting } from './starting';
import { Transition } from './transition';
import { Authorization } from './authorization';
import { Subscription } from './subscription';
import { Registration} from './registration';
import { ForgotPassword } from './forgotPassword'
import { FirstChoice } from './firstChoice';
import { YourChoicePremisesLandscape } from './yourChoicePrLa';
import { YourChoiceRoadWorks } from './yourChoiseRoad';
import { MoreDetailedChoicePremisesLandscape } from './moreDetailedChoicePrLa';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SmallRoom } from './smallRoom';
import { Walls } from './walls';
import { Wallpaper } from './wallpaper';
import { Tile } from './tile';
import { Floor } from './floor';
import { TileFloor } from './tileFloor';
import { RollCovers } from './rollCovers';
import { MoreDetailedChoiseRoad } from './moreDetailedChoiseRoad';
import { RoadSurface } from './roadSurface';
import { Archive } from './archive';

const Stack = createStackNavigator();
export default function Navigate() {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false, cardStyleInterpolator: ({ current: { progress } }) => ({cardStyle: {opacity: progress},}),  }}>
            <Stack.Screen 
            name = "starting"
            component = {Starting}
            options={{ headerShown: false }}
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
            <Stack.Screen
            name = "Wallpaper"
            component = {Wallpaper}
            options={{ headerShown: false }}
            />
             <Stack.Screen
            name = "Floor"
            component = {Floor}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "TileFloor"
            component = {TileFloor}
            options={{ headerShown: false }}
            />
             <Stack.Screen
            name = "RollCovers"
            component = {RollCovers}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "MoreDetailedChoiseRoad"
            component = {MoreDetailedChoiseRoad}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "RoadSurface"
            component = {RoadSurface}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name = "Archive"
            component = {Archive}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}