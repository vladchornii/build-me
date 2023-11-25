import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { globalStyle } from '../styles/style';
import { startingStyles } from '../styles/startingStyles';

export const Transition= ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Authorization');
    }, 2000); 

    return () => {
      clearTimeout(timer); 
    };
  }, []);

  return (
    <View style={[globalStyle.main, startingStyles.box]}>
      <ImageBackground source={require('../assets/images/background-circle.png')} style={startingStyles.background} >
        <Text style={[globalStyle.text, startingStyles.headerText]}>BuildMe</Text>
      </ImageBackground>
      <Image source={require('../assets/images/pointer.png')} style={startingStyles.pointer} />
      <Text style={[globalStyle.text, startingStyles.text]}>Натискай і починай будувати</Text>
    </View>
  );
};
