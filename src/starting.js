import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { globalStyle } from '../styles/style';
import { startingStyles } from '../styles/startingStyles';

export const Starting = props => {
    return (
        <View style={[globalStyle.main, startingStyles.container]}>
            <ImageBackground source={require('../assets/images/background-circle.png')} style ={startingStyles.background} >
                <Text style={[globalStyle.text, startingStyles.headerText]}>BuildMe</Text>
            </ImageBackground>
            <Image source = {require('../assets/images/pointer.png')} />
            <Text style={[globalStyle.text, startingStyles.text]}>Натискай і починай будувати</Text>
        </View>
        
    )
}
