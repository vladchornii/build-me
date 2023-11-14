import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { moreDetailedChoiceStyles } from '../styles/moreDetailedChoiceStyles';

export const SmallRoom = ({ navigation }) =>{
  return (
 <View style={globalStyle.main}>
    <TouchableOpacity style={moreDetailedChoiceStyles.arrow} onPress={() => {navigation.navigate("YourChoicePremisesLandscape"); }}>
      <Image source={require("../assets/images/arrow.png")}/>
    </TouchableOpacity>
    <Image style={moreDetailedChoiceStyles.image} source={require("../assets/images/moreDetailedChoicePrLaIcon.png")}/>
    <Text style={[globalStyle.text, moreDetailedChoiceStyles.headerText]}>Ви обрали:</Text>
    <Text style={[globalStyle.text, moreDetailedChoiceStyles.buttonText]}>Невелике приміщення</Text>
 </View>
  );
};