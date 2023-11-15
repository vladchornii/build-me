import { StyleSheet } from 'react-native';

export const WallsStyles = StyleSheet.create({
    headerText:{
        marginBottom: 60,
    },
    text: {
        fontSize: 18,
    },
    buttonText:{
        color: 'rgba(244, 240, 232, 1)',
    },
    button: {
        height: 65,
        width: 325,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'rgba(90, 100, 87, 1)',
        margin: 10,
        backgroundColor: 'rgba(90, 100, 87, 1)',
        marginBottom: 40, 
    },
    boldText: {
        fontFamily: 'playfair-bold',
        marginBottom: 30,
    },
    arrow: {
        alignSelf: 'flex-start',
        marginBottom: -30,
    },
    clicker: {
        marginBottom: 10,
    },
    pointer: {
        marginBottom: 30,
    },
    image: {
        marginBottom: 90,
    }
})