import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { WallsStyles } from "../styles/wallsStyles";

export const Walls= ({ navigation }) => {
    return (
        <View style={globalStyle.container}>
            <TouchableOpacity style={WallsStyles.arrow} onPress={() => {navigation.navigate("SmallRoom"); }}>
                <Image source={require("../assets/images/arrow.png")}/>
            </TouchableOpacity>
            <Image  style={WallsStyles.image} source={require("../assets/images/moreDetailedChoicePrLaIcon.png")}/>
            <Text style={[globalStyle.text, globalStyle.headerText, WallsStyles.headerText]}>Ви обрали:</Text>
            <TouchableOpacity style={WallsStyles.button}>
                <Text style={[globalStyle.text, WallsStyles.text, WallsStyles.buttonText]}>Невелике приміщення</Text>
            </TouchableOpacity>
            <Image style={WallsStyles.pointer} source={require("../assets/images/downPointer.png")}/>
            <Text style={[globalStyle.text, WallsStyles.text, WallsStyles.boldText]}>Стіни</Text>
            <Image style={WallsStyles.pointer} source={require("../assets/images/downPointer.png")}/>
            <TouchableOpacity>
                <Text style={[globalStyle.text, WallsStyles.text, WallsStyles.clicker]}>Облицювання</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Tile"); }}>
                <Text style={[globalStyle.text, WallsStyles.text, WallsStyles.clicker]}>Плитка</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Wallpaper"); }}>
                <Text style={[globalStyle.text, WallsStyles.text, WallsStyles.clicker]}>Шпалери</Text>
            </TouchableOpacity>
        </View>
    );
};