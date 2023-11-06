import React from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/style";
import { authorizationStyles } from "../styles/authorizationStyles";

export const Authorization = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={[globalStyle.main, authorizationStyles.box]}>
      <Image source={require("../assets/images/background-authorization.png")}/>
      <Text style={[authorizationStyles.text, authorizationStyles.headerText]}>Увійти</Text>
      <TextInput
        style={authorizationStyles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="E-mail"
        placeholderStyle={authorizationStyles.text}
        placeholderTextColor='rgba(244, 240, 232, 1)'
      />
      <TextInput
        style={authorizationStyles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Пароль"
        placeholderTextColor='rgba(244, 240, 232, 1)'
        secureTextEntry={true}
      />
      <TouchableOpacity style={authorizationStyles.continueButton} onPress={() => {navigation.navigate("Subscription"); }}>
        <Text style={authorizationStyles.continueButtonText}>Продовжити</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={authorizationStyles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={authorizationStyles.forgotPasswordButton}>
        <Text style={authorizationStyles.buttonText}>Забули пароль?</Text>
      </TouchableOpacity>
    </View>
  );
};