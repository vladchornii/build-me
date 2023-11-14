import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";

export const Walls= ({ navigation }) => {
    return (
        <View style={globalStyle.main}>
            <TouchableOpacity>
                <Image source={require("../assets/images/arrow.png")}/>
            </TouchableOpacity>
            <Image source={require("../assets/images/moreDetailedChoicePrLaIcon.png")}/>
            <Text style={[globalStyle.text]}>Ви обрали:</Text>
            <Text style={[globalStyle.text ]}>Невелике приміщення</Text>
            <Image source={require("../assets/images/downPointer.png")}/>
            <Text style={[globalStyle.text ]}>Стіни</Text>
            <Image source={require("../assets/images/downPointer.png")}/>
            <TouchableOpacity>
                <Text style={[globalStyle.text]}>Облицювання</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[globalStyle.text]}>Плитка</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[globalStyle.text]}>Шпалери</Text>
            </TouchableOpacity>
        </View>
    );
};