import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_NAMES } from '../../constants/screenNames';
import styles from './styles';
const login = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.form_login}>
        <View style={styles.form_top}>
          <Text style={styles.txt_login_1}>{'Login'}</Text>
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
