import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
const splash = props => {
  const { navigation } = props;
  return (
    <View style={styles.constainer}>
      <Image
        source={require('../../assets/splash_screen.jpg')}
        style={styles.splash_screen}></Image>

      <Image source={require('../../assets/Product_Logo.png')} style={styles.logo_splash}></Image>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.HOME);
        }}>
        <Text style={styles.Skip_button}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default splash;
