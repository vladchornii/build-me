import { StyleSheet } from 'react-native';

export const authorizationStyles = StyleSheet.create({
    box: {
        backgroundColor:'rgba(90, 100, 87, 1)', 
        justifyContent: 'flex-start',
        padding: 0,
    },
    text: {
        fontFamily: 'playfair-bold',
        color: 'rgba(244, 240, 232, 1)',
    },
    headerText: {
        fontSize: 28,
        marginBottom: 30,
    },
    input: {
        height: 44,
        width: 290,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(244, 240, 232, 1)',
        margin: 10,
        paddingLeft: 20,
        color: 'rgba(244, 240, 232, 1)',
    },
    continueButton: {
        height: 58,
        width: 290,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(244, 240, 232, 1)',
        backgroundColor:'rgba(244, 240, 232, 1)',
        margin: 5,
        marginTop: 25,
        marginBottom: 15,
    },
    continueButtonText: {
        fontFamily: 'playfair-bold',
        color:'rgba(90, 100, 87, 1)',
        fontSize: 20,
    },
    buttonText: {
        fontFamily: 'playfair-regular',
        color: 'rgba(244, 240, 232, 1)',
        fontSize: 15,
        marginTop: 15,
    },
    forgotPasswordButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    image:{
        maxWidth: '100%',
        marginTop: -200,
        marginBottom: 20
    }
})