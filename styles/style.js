import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 320,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 110,
    },
    text: {
        fontSize: 14,
        fontFamily: 'playfair-regular',
        color: 'rgba(90, 100, 87, 1)',
    },
    headerText: {
        fontSize: 25,
        fontFamily: 'playfair-bold',
    }
})