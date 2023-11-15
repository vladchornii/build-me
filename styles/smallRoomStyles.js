import { StyleSheet } from 'react-native';

export const SmallRoomStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 140,
        alignItems: 'center',
        marginBottom: 100,
    },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'playfair-bold',
    marginBottom: 50,
},
text: {
    fontSize: 18,
    marginBottom: 10,
},
buttonText:{
    fontSize: 18,
    fontFamily: 'playfair-regular',
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
arrow:{
    alignSelf: 'flex-start',
    marginBottom: -30,
},
image: {
    marginBottom: 70,
},
pointer: {
    marginBottom: 30,
}
})