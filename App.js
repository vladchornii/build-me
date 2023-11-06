import React, { useState } from 'react';
/*import { StyleSheet, Text, Image, View } from 'react-native';
import { globalStyle } from './styles/style';
import { startingStyles } from './styles/startingStyles';*/
import Navigate from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  'playfair-bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
  'playfair-medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
  'playfair-regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
});

export default function App() {
  const[font, setFont] = useState(false);
  if(font) {
    return (
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={() => console.log("Error occurred during font loading")}
       />
    );
  }
}