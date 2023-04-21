import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
const login = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.form_login}>
        <View style={styles.form_top}>
          <Text style={styles.txt_login_1}>Login</Text>
          <Text style={styles.txt_login_2}>Access to purchased tickets</Text>
        </View>
        <TextInput
          placeholder="    Phone number"
          style={styles.form_input}
          placeholderTextColor={'#637394'}
          returnKeyType="next"></TextInput>

        <TouchableOpacity
          style={styles.button_login}
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.AUTHENCATION);
          }}>
          <Text style={styles.txt_button}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;
