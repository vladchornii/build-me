import React from 'react';
import { View, Text, TextInput, Button  } from 'react-native';

export function Registration() {
  const [tel, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
      <View>
        <Text>Зареєструйся!</Text>
        <Text>вступай в нашу команду</Text>
        <TextInput
             onChangeText={(text) => setPhoneNumber(text)}
             value={tel}
             placeholder ="Номер телефону"
           />
        <TextInput
             onChangeText={(text) => setEmail(text)}
             value={email}
             placeholder ="E-mail"
           />
           <TextInput
             onChangeText={(text) => setPassword(text)}
             value={password}
             placeholder ="Пароль"
             secureTextEntry={true}
           />
         <Button title="Раді вітати!" onPress={() => {navigation.navigate('Subscription')}}/>
      </View>
  )
}