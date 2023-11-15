import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { globalStyle } from "../styles/style";


export function Wallpaper({navigation}) {
    const [lengthWallpaper, onChangeLengthWallpaper] = React.useState('');
    const [widthhWallpaper, onChangeWidthWallpaper] = React.useState('');
    const [lengthWall, onChangeLengthWall] = React.useState('');
    const [widthhWall, onChangeWidthWall] = React.useState('');

    return (
        <View style={globalStyle.container}>
            <TouchableOpacity onPress={() => {navigation.navigate("Walls"); }}>
                <Image source={require("../assets/images/arrow.png")}/>
            </TouchableOpacity>
            <Text style={[globalStyle.text]}>Стіни</Text>
            <Text style={[globalStyle.text, globalStyle.headerText]}>Шпалери</Text>
            <Text style={[globalStyle.text]}>Довжина шпалер, м</Text>
            <TextInput
             onChangeText={onChangeLengthWallpaper}
             value={lengthWallpaper} 
             keyboardType="numeric"
           />
            <Text style={[globalStyle.text]}>Ширина шпалер, м</Text>
            <TextInput
             onChangeText={onChangeWidthWallpaper}
             value={widthhWallpaper} 
             keyboardType="numeric"
           />
           <Text style={[globalStyle.text]}>Довжина стіни, м</Text>
            <TextInput
             onChangeText={onChangeLengthWall}
             value={lengthWall} 
             keyboardType="numeric"
           />
            <Text style={[globalStyle.text]}>Ширина стіни, м</Text>
            <TextInput
             onChangeText={onChangeWidthWall}
             value={widthhWall} 
             keyboardType="numeric"
           />
           <TouchableOpacity>
              <Text style={[globalStyle.text]}>Розрахунок</Text>
            </TouchableOpacity>
        </View>
    )
}