import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from "../styles/style";


export function Subscription({navigation}) {
    return (
            <View style={globalStyle.main}>
                <TouchableOpacity onPress={() => {navigation.navigate("FirstChoice"); }}>
                    <Text>Press</Text>
                </TouchableOpacity>
            </View>
        
    )
}