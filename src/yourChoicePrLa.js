import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { yourChoiceStyles } from "../styles/yourChoiceStyles";

export const YourChoicePremisesLandscape= ({ navigation }) => {
    return (
        <View style={globalStyle.main}>
            <TouchableOpacity style={yourChoiceStyles.arrow} onPress={() => {navigation.navigate("FirstChoice"); }}>
                <Image source={require("../assets/images/arrow.png")}/>
            </TouchableOpacity>
            <Text style={[globalStyle.text, yourChoiceStyles.headerText]}>Ви обрали:</Text>
            <Text style={[globalStyle.text, yourChoiceStyles.text]}>Приміщення(ззовні або всередині), ландшафт</Text>
            <Image source={require("../assets/images/choicePrLaIcon.png")}/>
            <TouchableOpacity style={yourChoiceStyles.transition} onPress={() => {navigation.navigate("MoreDetailedChoicePremisesLandscape"); }}>
                <Text style={[globalStyle.text, yourChoiceStyles.transitionText]}>Все вірно!</Text>
                <Image source={require("../assets/images/symbol.png")}/>
            </TouchableOpacity>
        </View>
    );
};