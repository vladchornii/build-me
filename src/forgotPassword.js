import React from 'react';
import { View, Text} from "react-native";
import { globalStyle } from '../styles/style';
import { forgotPasswordStyles } from '../styles/forgotPasswordStyles';

export function ForgotPassword() {
    return (
        <View style={globalStyle.main}>
            <Text style={[globalStyle.text, globalStyle.headerText, forgotPasswordStyles.mainText]}>404{'\n'}PAGE ERROR</Text>
            <Text style={[globalStyle.text, forgotPasswordStyles.text]}>Ваші проблеми!{'\n'}Нам тепер робити ще 10 сторінок, щоб ви згадали?</Text>
        </View>
    )
}
