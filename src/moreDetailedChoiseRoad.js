import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { moreDetailedChoiceStyles } from '../styles/moreDetailedChoiceStyles';

export const MoreDetailedChoiseRoad= ({ navigation }) => {
    return (
        <View style={globalStyle.container}>
            <TouchableOpacity style={moreDetailedChoiceStyles.arrow} onPress={() => {navigation.navigate("YourChoiceRoadWorks"); }}>
                <Image source={require("../assets/images/arrow.png")}/>
            </TouchableOpacity>
            <Image style={moreDetailedChoiceStyles.image} source={require("../assets/images/roadsIcon.png")}/>
            <Text style={[globalStyle.text, moreDetailedChoiceStyles.headerText]}>Обери,що саме тобі{'\n'}потрібно</Text>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}  onPress={() => {navigation.navigate("RoadSurface")}}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Дорожнє покриття</Text>
            </TouchableOpacity>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Ремонт ям</Text>
            </TouchableOpacity>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Бордюри</Text>
            </TouchableOpacity>
            <TouchableOpacity style={moreDetailedChoiceStyles.button}>
                <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Розмітка</Text>
            </TouchableOpacity>
        </View>
    );
};