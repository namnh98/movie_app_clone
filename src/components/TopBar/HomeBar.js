import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { changeLanguageHandler } from '../../redux/actions';
import styles from './HomeBarStyles';

const HomeBar = (props) => {
  const { UserMode = 'non-User', LoginOnpress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.flex_item1}>
        <Image source={require('../../assets/img/Logo/ProductLogo.png')} />
      </View>
      <View style={[styles.flex_item2]}>
        <View style={styles.flex_item_child}>
          <Image source={require('../../assets/img/icons/Location.png')} />
          <Text style={[styles.flex_item_font, styles.space_item]}>
            Nur-Sultan
          </Text>
        </View>
        <View style={styles.flex_item_child}>
          <Image source={require('../../assets/img/icons/Language.png')} />
          <TouchableOpacity>
            <Text style={[styles.flex_item_font, styles.space_item]}>
              {'Eng'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flex_item1}>
        <TouchableOpacity onPress={LoginOnpress} style={styles.flex_item_btn}>
          <Text style={styles.flex_item_font}>
            {UserMode === 'User' ? 'Profile' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeBar;
