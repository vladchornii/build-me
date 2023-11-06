import { StyleSheet } from 'react-native';

export const registrationStyles = StyleSheet.create({
   headerText:{
    fontSize: 28,
    fontFamily: 'playfair-bold',
    color:'rgba(90, 100, 87, 1)',
  },
    text:{
    fontFamily: 'playfair-bold',
    color:'rgba(90, 100, 87, 1)',
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 30,
  },
  input: {
    height: 44,
    width: 290,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(90, 100, 87, 1)',
    margin: 5,
    paddingLeft: 20,
    color: 'rgba(90, 100, 87, 1)',
},
continueButton: {
  height: 58,
  width: 290,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderRadius: 10,
  borderColor: 'rgba(90, 100, 87, 1)',
  backgroundColor:'rgba(90, 100, 87, 1)',
  margin: 5,
  marginTop: 30,
  marginBottom: 5,
},
continueButtonText:{
    fontFamily: 'playfair-bold',
    color:'rgba(244, 240, 232, 1)',
    fontSize: 20,
}
 })