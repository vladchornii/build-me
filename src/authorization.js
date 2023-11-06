import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { globalStyle } from '../styles/style';
import { authorizationStyles } from '../styles/authorizationStyles';
import { StyleSheet } from 'react-native';

export const Authorization = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={[globalStyle.main, authorizationStyles.box]}>
            <Image source = {require('../assets/images/background-authorization.png')} />
            <Text style={[authorizationStyles.text, authorizationStyles.headerText]}>Увійти</Text>
            <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder ="E-mail"
      />
            <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder ="Пароль"
        secureTextEntry={true}
      />
       <Button title="Продовжити" onPress={() => {navigation.navigate('Subscription')}}/>
       <Button title="Зареєструватися"/>
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
  });
