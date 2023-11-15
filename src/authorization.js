import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert} from "react-native";
import { globalStyle } from "../styles/style";
import { authorizationStyles } from "../styles/authorizationStyles";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase-config";

export const Authorization = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password )
    .then((userCredential) => {
      console.log('Signed In!')
      const user = userCredential.user ;
      console.log(user)
      navigation.navigate("Subscription");
      Alert.alert('You signed in!')


    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={[globalStyle.main, authorizationStyles.box]}>
      <View style={[globalStyle.main, authorizationStyles.box]}>
        <Image source={require("../assets/images/background-authorization.png")}/>
        <Text style={[authorizationStyles.text, authorizationStyles.headerText]}>Увійти</Text>
        <TextInput
          style={[authorizationStyles.input]}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="E-mail"
          placeholderStyle={authorizationStyles.text}
          placeholderTextColor='rgba(244, 240, 232, 1)'
        />
        <TextInput
          style={[authorizationStyles.input]}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Пароль"
          placeholderTextColor='rgba(244, 240, 232, 1)'
          secureTextEntry={true}
        />
        <TouchableOpacity 
        style={authorizationStyles.continueButton} 
        onPress={() => {
          handleSignIn();
          // navigation.navigate("Subscription");
        }}>
          <Text style={authorizationStyles.continueButtonText}>Продовжити</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Registration"); }}>
          <Text style={authorizationStyles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={authorizationStyles.forgotPasswordButton}>
          <Text style={authorizationStyles.buttonText}>Забули пароль?</Text>
        </TouchableOpacity>
      </View> 
    </KeyboardAvoidingView>
  );
};