import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
const profile = props => {
  const { navigation } = props;
  return (
    <View style={styles.container_pay}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.TICKET)}>
          <Image source={require('../../assets/Back.png')} style={styles.img_bar}></Image>
        </TouchableOpacity>

        <Text style={styles.txt_bar}>8 (707) 268 48 12 </Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.HOME)}>
          <Image source={require('../../assets/Logout.png')} style={styles.img_bar}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.txt_section}>Saved cards</Text>
        <View style={styles.card}>
          <View style={styles.visa}>
            <Image source={require('../../assets/Visa.png')} style={styles.img_visa}></Image>
            <Text style={styles.txt_visa}>4716 •••• •••• 5615</Text>
          </View>
          <Text style={styles.exp_txt}> 06/24</Text>
        </View>

        <TouchableOpacity style={styles.button_add}>
          <Text style={styles.txt_add}>Add new card </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section_pay}>
        <Text style={styles.txt_scpay}> Payments history</Text>

        <View style={styles.payments}>
          <Image
            source={require('../../assets/ImageBatman.png')}
            style={styles.img_payment}></Image>

          <View style={styles.title}>
            <Text style={styles.txt_title_1}>The Batman </Text>
            <Text style={styles.txt_title_2}> 6 April 2022, 14:40</Text>
            <Text style={styles.txt_title_3}> Eurasia Cinema</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default profile;
