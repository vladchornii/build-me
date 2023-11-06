import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { moreDetailedChoiceStyles } from '../styles/moreDetailedChoiceStyles';

export const MoreDetailedChoicePremisesLandscape= ({ navigation }) => {
    return (
        <View style={globalStyle.main}>
            <TouchableOpacity style={moreDetailedChoiceStyles.arrow} onPress={() => {navigation.navigate("YourChoicePremisesLandscape"); }}>
                <Image source={require("../assets/images/arrow.png")}/>
            </TouchableOpacity>
            <Image style={moreDetailedChoiceStyles.image} source={require("../assets/images/moreDetailedChoicePrLaIcon.png")}/>
            <Text style={[globalStyle.text, moreDetailedChoiceStyles.headerText]}>Обери,що саме тобі потрібно</Text>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Невелике приміщення</Text>
            </TouchableOpacity>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Зовнішній каркас дому</Text>
            </TouchableOpacity>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Комунальні послуги</Text>
            </TouchableOpacity>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Ландшафтні роботи</Text>
            </TouchableOpacity>
        </View>
    );
};