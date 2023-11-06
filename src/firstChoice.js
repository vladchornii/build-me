import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { firstChoiceStyles } from '../styles/firstChoiceStyles';

export const FirstChoice= ({ navigation }) => {
    return (
        <View style={globalStyle.main}>
            <Text style={[globalStyle.text, firstChoiceStyles.headerText]}>Що плануємо робити?</Text>
            <Text style={[globalStyle.text, firstChoiceStyles.text]}>Оберіть, який тип роботи треба виконати</Text>
            <View style={firstChoiceStyles.icons}>
                <TouchableOpacity onPress={() => {navigation.navigate("YourChoicePremisesLandscape"); }}>
                    <Image source={require("../assets/images/premisesLandscapeIcon.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("YourChoiceRoadWorks"); }}>
                    <Image source={require("../assets/images/roadWorksIcon.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );
  };