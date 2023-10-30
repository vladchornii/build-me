import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyle } from '../styles/style';
import { startingStyles } from '../styles/startingStyles';

export const Starting = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('Authorization');
    };
    
    return (
        <View style={[globalStyle.main, startingStyles.container]}>
            <TouchableOpacity style={startingStyles.button} onPress={handleButtonPress}>
                <ImageBackground source={require('../assets/images/background-circle.png')} style ={startingStyles.background} >
                    <Text style={[globalStyle.text, startingStyles.headerText]}>BuildMe</Text>
                    </ImageBackground>
            </TouchableOpacity>
            <Image source = {require('../assets/images/pointer.png')} style={startingStyles.pointer} />
            <Text style={[globalStyle.text, startingStyles.text]}>Натискай і починай будувати</Text>
        </View>
    )
}
