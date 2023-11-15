import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { globalStyle } from "../styles/style";
import { CalcWallpaperWallStyles } from '../styles/calcWallpaperWallStyles';


export function Wallpaper({navigation}) {
    const [lengthWallpaper, onChangeLengthWallpaper] = React.useState('');
    const [widthWallpaper, onChangeWidthWallpaper] = React.useState('');
    const [lengthWall, onChangeLengthWall] = React.useState('');
    const [widthWall, onChangeWidthWall] = React.useState('');

    return (
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
           <TouchableOpacity style={CalcWallpaperWallStyles.button}>
              <Text style={[globalStyle.headerText, CalcWallpaperWallStyles.buttonText]}>Розрахунок</Text>
            </TouchableOpacity>
        </View>
    )
}