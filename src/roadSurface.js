import React, { useState } from 'react';
import { View, Text, Image,  TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";
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

  let resultCrushedStone = (lengthCrushedStone*widthCrushedStone*heightCrushedStone);
  let resultConcrete = (lengthConcrete*heightConcrete*0.1208); 


    if (resultCrushedStone <= 0,  lengthCrushedStone <= 0, widthCrushedStone <= 0, heightCrushedStone <= 0, resultCrushedStone >= 2000000000 ) 
    {
      resultCrushedStone = 'Неможливо визначити кількість';
    }
    else 
    {
       resultCrushedStone = Math.ceil(resultCrushedStone);
    };

    if ( lengthConcrete <= 0, heightConcrete <= 0, resultCrushedStone >= 2000000000) 
    {
      resultConcrete = 'Неможливо визначити кількість';
    }
    else 
    {
       resultConcrete = resultConcrete.toFixed(1);
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
          <Text style={[globalStyle.text, CalcWallpaperWallStyles.dropDownText]}>Буде потрібно щебеневого покриття:</Text>
          <Text style={[globalStyle.headerText, CalcWallpaperWallStyles.buttonText, CalcWallpaperWallStyles.dropDownText]}>{resultCrushedStone} м3</Text>
          <Text style={[globalStyle.text, CalcWallpaperWallStyles.dropDownText]}>Буде потрібно асфальтобетонного покриттч:</Text>
          <Text style={[globalStyle.headerText, CalcWallpaperWallStyles.buttonText, CalcWallpaperWallStyles.dropDownText]}>{resultConcrete} т</Text>
          
        </View>
        )}
      </View>
    </TouchableWithoutFeedback>
 )};
