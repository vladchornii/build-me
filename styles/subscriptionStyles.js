import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const subscriptionStyles = StyleSheet.create({
    mainText: {
        fontSize: 20,
        fontFamily: 'playfair-bold',
        color: 'rgba(244, 240, 232, 1)',
    },
    textForFree: {
        color: 'rgba(90, 100, 87, 1)',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    block:{
        height: 534,
        width: 327,
        backgroundColor: 'rgba(90, 100, 87, 0.86)',

        borderRadius: 20,
    },
    cross: {
        alignSelf: 'flex-end',
        margin: 30,
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 20,
    },
    buttonForFree:{
        height: 84,
        width: 301,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(244, 240, 232, 1)',
        backgroundColor: 'rgba(244, 240, 232, 1)',
        marginTop: 30,
    },
    button: {
        height: 73,
        width: 280,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(244, 240, 232, 1)',
        marginTop: 30,
    },
    backgroundImage: {
        width: width,
        height: height,
      },
})