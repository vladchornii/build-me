import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyle } from "../styles/style";
import { CalcWallpaperWallStyles } from "../styles/calcWallpaperWallStyles";

export function Wallpaper({navigation}) {
    const [lengthWallpaper, onChangeLengthWallpaper] = React.useState('');
    const [widthWallpaper, onChangeWidthWallpaper] = React.useState('');
    const [lengthWall, onChangeLengthWall] = React.useState('');
    const [widthWall, onChangeWidthWall] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    let sWallpaper = (lengthWallpaper*widthWallpaper);
    let sWall = widthWall*lengthWall;
    let result = (sWall/sWallpaper); 
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={globalStyle.container}>
            <TouchableOpacity style={CalcWallpaperWallStyles.arrow} onPress={() => {navigation.navigate("Walls"); }}>
                <Image source={require("../assets/images/arrow.png")}/>
            </TouchableOpacity>
            <Text style={[globalStyle.text, CalcWallpaperWallStyles.title]}>Стіни</Text>
            <Text style={[globalStyle.text, globalStyle.headerText, CalcWallpaperWallStyles.headerText]}>Шпалери</Text>
            <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Довжина шпалер, м</Text>
            <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeLengthWallpaper}
             value={lengthWallpaper} 
             keyboardType="numeric"
           />
            <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Ширина шпалер, м</Text>
            <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeWidthWallpaper}
             value={widthWallpaper} 
             keyboardType="numeric"
           />
           <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Довжина стіни, м</Text>
            <TextInput
             style={CalcWallpaperWallStyles.input}
             onChangeText={onChangeLengthWall}
             value={lengthWall} 
             keyboardType="numeric"
           />
            <Text style={[globalStyle.text, CalcWallpaperWallStyles.text]}>Ширина стіни, м</Text>
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
          <Text style={[globalStyle.text, CalcWallpaperWallStyles.dropDownText]}>Буде потрібно шпалер:</Text>
          <Text style={[globalStyle.headerText, CalcWallpaperWallStyles.buttonText, CalcWallpaperWallStyles.dropDownText]}>{result} шт.</Text>
        </View>
        )}
        </View>
      </TouchableWithoutFeedback>
    )
}
