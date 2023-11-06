import { StyleSheet } from 'react-native';

export const moreDetailedChoiceStyles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'playfair-bold',
        marginBottom: 50,
    },
    buttonText:{
        fontSize: 18,
        fontFamily: 'playfair-regular',
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
    },
    arrow:{
        alignSelf: 'flex-start',
        marginBottom: -30,
    },
    image: {
        marginBottom: 70,
    },

})