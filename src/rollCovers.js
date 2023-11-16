import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { globalStyle } from "../styles/style";
import { CalcWallpaperWallStyles } from '../styles/calcWallpaperWallStyles';

export const RollCovers= ({ navigation }) => {
  const [lengthTile, onChangeLengthTile] = React.useState('');
  const [widthTile, onChangeWidthTile] = React.useState('');
  const [lengthWall, onChangeLengthWall] = React.useState('');
  const [widthWall, onChangeWidthWall] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
      setModalVisible(!modalVisible);
  };
  return(
     <View style={globalStyle.container}>
        <TouchableOpacity style={CalcWallpaperWallStyles.arrow} onPress={() => {navigation.navigate("Floor"); }}>
          <Image source={require("../assets/images/arrow.png")}/>
        </TouchableOpacity>
            <Text style={[globalStyle.text, CalcWallpaperWallStyles.title]}>Підлога</Text>
        <Text style={[globalStyle.text, globalStyle.headerText, CalcWallpaperWallStyles.headerText]}>Рулонні покриття</Text>
        <Text style= {[ globalStyle.text, CalcWallpaperWallStyles.text]}>Довжина рулону, м</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeLengthTile}
             value={lengthTile} 
             keyboardType="numeric"
           />
        <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Ширина рулону, м</Text>
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
         <TouchableOpacity style={CalcWallpaperWallStyles.button} onPress={toggleModal}>
          <Text style={[globalStyle.headerText, CalcWallpaperWallStyles.buttonText, CalcWallpaperWallStyles.dropDownText]}>Розрахунок</Text>
        </TouchableOpacity>
        {modalVisible && (
        <View style={CalcWallpaperWallStyles.modalContainer}>
          <TouchableOpacity onPress={toggleModal}>
          <Image style={CalcWallpaperWallStyles.image} source={require("../assets/images/cross.png")}/>
          </TouchableOpacity>
          <Text style={[globalStyle.headerText, CalcWallpaperWallStyles.buttonText, CalcWallpaperWallStyles.dropDownText]}>Розрахунок</Text>
          <Text style={[globalStyle.text, CalcWallpaperWallStyles.dropDownText]}>Буде потрібно рулонів:</Text>
        </View>
        )}
     </View>
 );
};
