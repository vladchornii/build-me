import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { globalStyle } from '../styles/style';
import { authorizationStyles } from '../styles/authorizationStyles';
import { StyleSheet } from 'react-native';

export const Authorization = ({navigation}) => {
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
      <View style={[globalStyle.main, authorizationStyles.box]}>
         <Image style={styles.inputFocused} source = {require('../assets/images/background-authorization.png')} />
         <Text style={[authorizationStyles.text, authorizationStyles.headerText, styles.inputFocused]}>Увійти</Text>
            <TextInput
             style={[styles.input, passwordFocused && styles.inputFocused]}
             onChangeText={(text) => setEmail(text)}
             value={email}
             placeholder ="E-mail"
             onFocus={handleEmailFocus}
             onBlur={handleEmailBlur}
           />
           <TextInput
             style={[styles.input, passwordFocused && styles.inputFocused]}
             onChangeText={(text) => setPassword(text)}
             value={password}
             placeholder ="Пароль"
             secureTextEntry={true}
             onFocus={handlePasswordFocus}
             onBlur={handlePasswordBlur}
           />
         <Button title="Продовжити" onPress={() => {navigation.navigate('Subscription')}}/>
         <Button title="Зареєструватися" onPress={() => {navigation.navigate('Registration')}} />
         <Button title="Забули пароль?"/>
       </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    inputFocused: {
      transform: [{ translateY: -70 }], 
    },
  }); 