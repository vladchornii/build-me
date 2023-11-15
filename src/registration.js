import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { registrationStyles } from "../styles/registrationStyles";
import { globalStyle } from '../styles/style';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase-config";

export function Registration({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password )
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user ;
      console.log(user)
      Alert.alert('You singned up!')
      navigation.navigate("Authorization");


    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  return (
      <View style={globalStyle.main}>
        <Text style={[registrationStyles.headerText,]}>Зареєструйся!</Text>
        <Text style={registrationStyles.text}>вступай в нашу команду</Text>
        <TextInput style={registrationStyles.input}
             onChangeText={(text) => setEmail(text)}
             value={email}
             placeholder ="E-mail"
             placeholderTextColor='rgba(90, 100, 87, 1)'
           />
           <TextInput style={registrationStyles.input}
             onChangeText={(text) => setPassword(text)}
             value={password}
             placeholder ="Пароль"
             placeholderTextColor='rgba(90, 100, 87, 1)'
             secureTextEntry={true}
           />
          <TouchableOpacity style={registrationStyles.continueButton} onPress={() => { 
            handleCreateAccount();
            }}>
            <Text style={registrationStyles.continueButtonText}>Раді вітати!</Text>
          </TouchableOpacity>  
      </View>
  )
}