import React from 'react';
import { View, Text, TextInput, TouchableOpacity  } from 'react-native';
import { registrationStyles } from "../styles/registrationStyles";
import { globalStyle } from '../styles/style';

export function Registration({navigation}) {
  const [tel, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
      <View style={globalStyle.main}>
        <Text style={[registrationStyles.headerText,]}>Зареєструйся!</Text>
        <Text style={registrationStyles.text}>вступай в нашу команду</Text>
        <TextInput  style={registrationStyles.input}
             onChangeText={(text) => setPhoneNumber(text)}
             value={tel}
             placeholder ="Номер телефону"
             placeholderTextColor='rgba(90, 100, 87, 1)'
           />
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
          <TouchableOpacity style={registrationStyles.continueButton} onPress={() => {navigation.navigate("Subscription"); }}>
            <Text style={registrationStyles.continueButtonText}>Раді вітати!</Text>
          </TouchableOpacity>  
      </View>
  )
}