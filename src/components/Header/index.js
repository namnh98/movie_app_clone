import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header_home}>
      <Image source={require('../../assets/Product_Logo.png')} style={styles.image_logo_home} />
      <Text style={styles.text_home}>
        <Image source={require('../../assets/Vector.png')} />
        Nur-Sultan
      </Text>
      <Text style={styles.text_home}>
        <Image source={require('../../assets/Vector2.png')} />
        Eng
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.LOGIN);
        }}>
        <Text style={styles.text_home2}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header_home: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1F293D',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight + 8,
    paddingBottom: 16
  },
  image_logo_home: {
    width: 60,
    height: 54
  },
  text_home: {
    color: 'white',
    fontSize: 16
  },
  text_home2: {
    color: 'white',
    fontSize: 16,
    backgroundColor: '#FF8036',
    padding: 10,
    borderRadius: 8
  }
});
