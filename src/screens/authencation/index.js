import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';

const Authencation = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.form_login}>
        <View style={styles.form_top}>
          <Text style={styles.txt_login_1}>Login</Text>
          <Text style={styles.txt_login_2}>Enter the password from the SMStickets</Text>
        </View>
        <View style={styles.form_mid}>
          <TextInput style={styles.form_input} returnKeyType="next"></TextInput>
          <TextInput style={styles.form_input} returnKeyType="next"></TextInput>
          <TextInput style={styles.form_input} returnKeyType="next"></TextInput>
          <TextInput style={styles.form_input} returnKeyType="next"></TextInput>
        </View>

        <TouchableOpacity
          style={styles.button_login}
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.HOME);
          }}>
          <Text style={styles.txt_button}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authencation;
