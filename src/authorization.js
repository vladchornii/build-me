import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import { globalStyle } from "../styles/style";
import { authorizationStyles } from "../styles/authorizationStyles";
import { StyleSheet } from 'react-native';

export const Authorization = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailFocused, setEmailFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);
  const handleEmailFocus = () => {
      setEmailFocused(true);
    };
    
    const handleEmailBlur = () => {
      setEmailFocused(false);
    };
    
    const handlePasswordFocus = () => {
      setPasswordFocused(true);
    };
    
    const handlePasswordBlur = () => {
      setPasswordFocused(false);
    };

  return (
    <View style={[globalStyle.main, authorizationStyles.box]} behavior="padding">
      <Image source={require("../assets/images/background-authorization.png")}/>
      <Text style={[authorizationStyles.text, authorizationStyles.headerText]}>Увійти</Text>
      <TextInput
        style={[authorizationStyles.input, passwordFocused && styles.inputFocused]}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="E-mail"
        placeholderStyle={authorizationStyles.text}
        placeholderTextColor='rgba(244, 240, 232, 1)'
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />
      <TextInput
        style={[authorizationStyles.input, passwordFocused && styles.inputFocused]}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Пароль"
        placeholderTextColor='rgba(244, 240, 232, 1)'
        secureTextEntry={true}
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordBlur}
      />
      <TouchableOpacity style={authorizationStyles.continueButton} onPress={() => {navigation.navigate("Subscription"); }}>
        <Text style={authorizationStyles.continueButtonText}>Продовжити</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Registration"); }}>
        <Text style={authorizationStyles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={authorizationStyles.forgotPasswordButton}>
        <Text style={authorizationStyles.buttonText}>Забули пароль?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFocused: {
    transform: [{ translateY: -70 }], 
  },
});