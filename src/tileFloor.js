import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { globalStyle } from "../styles/style";
import { CalcWallpaperWallStyles } from '../styles/calcWallpaperWallStyles';

export const TileFloor= ({ navigation }) => {
  const [lengthTile, onChangeLengthTile] = React.useState('');
  const [widthTile, onChangeWidthTile] = React.useState('');
  const [lengthWall, onChangeLengthWall] = React.useState('');
  const [widthWall, onChangeWidthWall] = React.useState('');
  return(
     <View style={globalStyle.container}>
        <TouchableOpacity style={CalcWallpaperWallStyles.arrow} onPress={() => {navigation.navigate("Floor"); }}>
          <Image source={require("../assets/images/arrow.png")}/>
        </TouchableOpacity>
            <Text style={[globalStyle.text, CalcWallpaperWallStyles.title]}>Підлога</Text>
        <Text style={[globalStyle.text, globalStyle.headerText, CalcWallpaperWallStyles.headerText]}>Плитка</Text>
        <Text style= {[ globalStyle.text, CalcWallpaperWallStyles.text]}>Довжина плитки, мм</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeLengthTile}
             value={lengthTile} 
             keyboardType="numeric"
           />
        <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Ширина плитки, мм</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeWidthTile}
             value={widthTile} 
             keyboardType="numeric"
           />
        <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Довжина підлоги, м</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeLengthWall}
             value={lengthWall} 
             keyboardType="numeric"
           />
        <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Ширина підлоги, м</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeWidthWall}
             value={widthWall} 
             keyboardType="numeric"
           />
         <TouchableOpacity style={CalcWallpaperWallStyles.button}>
          <Text style={[globalStyle.headerText, CalcWallpaperWallStyles.buttonText]}>Розрахунок</Text>
        </TouchableOpacity>
     </View>
 );
};
