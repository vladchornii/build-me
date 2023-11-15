import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { SmallRoomStyles } from "../styles/smallRoomStyles";

export const SmallRoom = ({ navigation }) =>{
  return (
 <View style={[globalStyle.container]}>
    <TouchableOpacity style={SmallRoomStyles.arrow} onPress={() => {navigation.navigate("MoreDetailedChoicePremisesLandscape"); }}>
      <Image source={require("../assets/images/arrow.png")}/>
    </TouchableOpacity>
    <Image style={SmallRoomStyles.image} source={require("../assets/images/moreDetailedChoicePrLaIcon.png")}/>
    <Text style={[globalStyle.text, SmallRoomStyles.headerText]}>Ви обрали:</Text>
    <TouchableOpacity style={SmallRoomStyles.button}>
      <Text style={[globalStyle.text, SmallRoomStyles.buttonText]}>Невелике приміщення</Text>
    </TouchableOpacity>
    <Image style={SmallRoomStyles.pointer} source={require("../assets/images/downPointer.png")}/>
    <TouchableOpacity onPress={() => {navigation.navigate("Walls"); }}>
    <Text style={[globalStyle.text, SmallRoomStyles.text]}>Стіни</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {navigation.navigate("Floor"); }} >
    <Text style={[globalStyle.text, SmallRoomStyles.text]}>Підлога</Text>
    </TouchableOpacity>
    <TouchableOpacity >
    <Text style={[globalStyle.text, SmallRoomStyles.text]}>Стеля</Text>
    </TouchableOpacity>
 </View>
  );
};