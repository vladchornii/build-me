import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { globalStyle } from "../styles/style";
import { subscriptionStyles } from '../styles/subscriptionStyles';

export function Subscription({navigation}) {
    return (
            <View >
                <ImageBackground source={require("../assets/images/subscriptionBackground.png")} style={subscriptionStyles.backgroundImage}>
                    <View style={[subscriptionStyles.container]}>
                        <View style={[subscriptionStyles.block]}>
                            <TouchableOpacity onPress={() => {navigation.navigate("Authorization"); }}>
                                <Image style={subscriptionStyles.cross} source={require("../assets/images/cross.png")}/>
                            </TouchableOpacity>
                            <View style={subscriptionStyles.content}>
                                <Image style={[subscriptionStyles.image]} source={require("../assets/images/subscription-icon.png")}/>
                                <TouchableOpacity style={[subscriptionStyles.buttonForFree]} onPress={() => {navigation.navigate("FirstChoice"); }}>
                                    <Text style={[globalStyle.text, subscriptionStyles.mainText, subscriptionStyles.textForFree]}>Безкоштовно</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[subscriptionStyles.button]} onPress={() => {navigation.navigate("FirstChoice"); }}>
                                    <Text style={[globalStyle.text, subscriptionStyles.mainText]}>Дорого</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[subscriptionStyles.button]} onPress={() => {navigation.navigate("FirstChoice"); }}>
                                    <Text style={[globalStyle.text, subscriptionStyles.mainText]}>Ще дорожче</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        
    )
}