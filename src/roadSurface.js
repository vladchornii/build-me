import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";
import { globalStyle } from "../styles/style";
import { CalcWallpaperWallStyles } from '../styles/calcWallpaperWallStyles';

export const RoadSurface= ({ navigation }) => {
  const [lengthCrushedStone, onChangeLengthCrushedStone] = React.useState('');
  const [widthCrushedStone, onChangeWidthCrushedStone] = React.useState('');
  const [heightCrushedStone, onChangeHeightCrushedStone] = React.useState('');
  const [lengthConcrete, onChangeLengthConcrete] = React.useState('');
  const [heightConcrete, onChangeHeightConcrete] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
      setModalVisible(!modalVisible);
  };
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={globalStyle.container}>
        <TouchableOpacity style={CalcWallpaperWallStyles.arrow} onPress={() => {navigation.navigate("MoreDetailedChoiseRoad"); }}>
          <Image source={require("../assets/images/arrow.png")}/>
        </TouchableOpacity>
            <Text style={[globalStyle.text, CalcWallpaperWallStyles.title]}>Дорожнє покриття</Text>
        <Text style= {[ globalStyle.text, CalcWallpaperWallStyles.text]}>Довжина щебеневого покриття, м</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeLengthCrushedStone}
             value={lengthCrushedStone} 
             keyboardType="numeric"
           />
        <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Ширина щебеневого покриття, м</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeWidthCrushedStone}
             value={widthCrushedStone} 
             keyboardType="numeric"
           />
        <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Висота щебеневого покриття, м</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeHeightCrushedStone}
             value={heightCrushedStone} 
             keyboardType="numeric"
           />
        <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Довжина асфальтобетону, м</Text>
        <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeLengthConcrete}
             value={lengthConcrete} 
             keyboardType="numeric"
           />
           <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Висота асфальтобетону, м</Text>
           <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeHeightConcrete}
             value={heightConcrete} 
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
          <Text style={[globalStyle.text, CalcWallpaperWallStyles.dropDownText]}>Буде потрібно:</Text>
        </View>
        )}
      </View>
    </TouchableWithoutFeedback>
 )};
