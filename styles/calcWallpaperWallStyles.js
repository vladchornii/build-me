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
        marginTop: 5,
    },
    buttonText:{
        color: 'rgba(244, 240, 232, 1)',
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '40%', 
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'rgba(90, 100, 87, 1)',
      },
      dropDownText:{
        color: 'rgba(244, 240, 232, 1)',
        textAlign: 'center',
        marginBottom: 15,
      },
      image:{
       alignSelf: 'flex-end',
       marginRight: 25,
       marginTop: 15,
      }
})