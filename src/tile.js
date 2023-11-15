import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { globalStyle } from "../styles/style";

export const Tile= ({ navigation }) => {
  const [lengthTile, onChangeLengthTile] = React.useState('');
  const [widthTile, onChangeWidthTile] = React.useState('');
  const [lengthWall, onChangeLengthWall] = React.useState('');
  const [widthWall, onChangeWidthWall] = React.useState('');
  return(
     <View style={globalStyle.container}>
        <TouchableOpacity onPress={() => {navigation.navigate("Walls"); }}>
          <Image source={require("../assets/images/arrow.png")}/>
        </TouchableOpacity>
        <Text>Стіни</Text>
        <Text>Плитка</Text>
        <Text>Довжина плитки, мм</Text>
        <TextInput
             onChangeText={onChangeLengthTile}
             value={lengthTile} 
             keyboardType="numeric"
           />
        <Text>Ширина плитки, мм</Text>
        <TextInput
             onChangeText={onChangeWidthTile}
             value={widthTile} 
             keyboardType="numeric"
           />
        <Text>Довжина стіни, мм</Text>
        <TextInput
             onChangeText={onChangeLengthWall}
             value={lengthWall} 
             keyboardType="numeric"
           />
        <Text>Ширина стіни, мм</Text>
        <TextInput
             onChangeText={onChangeWidthWall}
             value={widthWall} 
             keyboardType="numeric"
           />
         <TouchableOpacity>
          <Text>Розрахунок</Text>
        </TouchableOpacity>
     </View>
 );
};
