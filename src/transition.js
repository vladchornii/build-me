import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
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
      <Text style={startingStyles.headerText}>BuildMe</Text>
    </View>
  );
};
