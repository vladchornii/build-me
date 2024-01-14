import React from "react";
import { moreDetailedChoiceStyles } from "../styles/moreDetailedChoiceStyles";
import { globalStyle } from "../styles/style";
import { TouchableOpacity, Image, View } from "react-native";

export const Archive= ({ navigation }) => {
  return( 
   <View style={globalStyle.container}>
      <TouchableOpacity style={moreDetailedChoiceStyles.arrow} onPress={() => {navigation.navigate("FirstChoice"); }}>
       <Image source={require("../assets/images/arrow.png")}/>
      </TouchableOpacity>
    </View>
  );
};
