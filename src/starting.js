import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/style';


export const Starting = props => {
    return (
        <View style={[globalStyle.main, styles.starting]}>
            <Text style={[globalStyle.title, styles.text]}>BuildMe</Text>
            <Image source = {require('../assets/images/pointer.png')} />
            <Text style={globalStyle.title}>Натискай і починай будувати</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    starting: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 33,
    }
})