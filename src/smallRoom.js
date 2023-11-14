import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";

export const SmallRoom = ({ navigation }) =>{
  return (
 <View style={globalStyle.main}>
    <TouchableOpacity onPress={() => {navigation.navigate("YourChoicePremisesLandscape"); }}>
      <Image source={require("../assets/images/arrow.png")}/>
    </TouchableOpacity>
    <Image source={require("../assets/images/moreDetailedChoicePrLaIcon.png")}/>
    <Text>Ви обрали:</Text>
    <TouchableOpacity>
      <Text style={globalStyle.text}>Невелике приміщення</Text>
    </TouchableOpacity>
    <Image source={require("../assets/images/downPointer.png")}/>
    <TouchableOpacity onPress={() => {navigation.navigate("Walls"); }}>
    <Text style={[globalStyle.text]}>Стіни</Text>
    </TouchableOpacity>
    <TouchableOpacity >
    <Text style={[globalStyle.text]}>Підлога</Text>
    </TouchableOpacity>
    <TouchableOpacity >
    <Text style={[globalStyle.text]}>Стеля</Text>
    </TouchableOpacity>
 </View>
  );
};