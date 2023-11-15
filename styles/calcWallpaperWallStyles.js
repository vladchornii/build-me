import { StyleSheet } from 'react-native';

export const CalcWallpaperWallStyles = StyleSheet.create({
    title:{
        fontSize: 18,
        marginBottom: 70,
    },
    arrow: {
        alignSelf: 'flex-start',
        marginBottom: -25,
    },
    headerText: {
        marginBottom: 40,
    },
    text:{
        marginBottom: 15,
    },
    input:{
        height: 44,
        width: 290,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'rgba(90, 100, 87, 1)',
        color: 'rgba(90, 100, 87, 1)',
        marginBottom: 30,
        paddingLeft: 20,
    },
    button:{
        height: 83,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: 'rgba(90, 100, 87, 1)',
        backgroundColor: 'rgba(90, 100, 87, 1)',
        marginTop: 20,
    },
    buttonText:{
        color: 'rgba(244, 240, 232, 1)',
    }
})