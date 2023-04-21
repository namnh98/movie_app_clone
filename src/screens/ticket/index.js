import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
const ticket = props => {
  const { navigation } = props;
  return (
    <View style={styles.container_pay}>
      <View style={styles.topbar}>
        <Text></Text>
        <Text style={styles.txt_bar}>Your ticket </Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
          <Image source={require('../../assets/Close.png')} style={styles.img_bar}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.ticket}>
        <View style={styles.CodeQR}>
          <Image source={require('../../assets/Code.png')} style={styles.img_bar}></Image>
        </View>
        <View style={styles.tear_line}>
          <Image source={require('../../assets/Tear_Line.png')} style={styles.img_tear}></Image>
        </View>
        <Text style={styles.txt_ticket}>The Batman </Text>
        <View style={styles.details}>
          <View style={styles.dt_left}>
            <Text style={styles.txt_left}>Cinema </Text>
            <Text style={styles.txt_left}> </Text>
            <Text style={styles.txt_left}>Date </Text>
            <Text style={styles.txt_left}> Hall</Text>
            <Text style={styles.txt_left}>Seats</Text>
            <Text style={styles.txt_left}>Cost</Text>
          </View>
          <View style={styles.dt_right}>
            <Text style={styles.txt_right}>Eurasia Cinema7</Text>
            <Text style={styles.txt_left}>ул. Петрова, д.24, ТЦ "Евразия" </Text>
            <Text style={styles.txt_right}> 6 April 2022, 14:40</Text>
            <Text style={styles.txt_right}> 6th</Text>
            <Text style={styles.txt_right}> 7 row (7, 8)</Text>
            <Text style={styles.txt_right}>3200 ₸ (paid)</Text>
          </View>
        </View>
      </View>

      <View style={styles.payment}>
        <TouchableOpacity
          style={styles.button_1}
          onPress={() => navigation.navigate(SCREEN_NAMES.PAY)}>
          <Text style={styles.txt_button}> Refund</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_2}
          onPress={() => navigation.navigate(SCREEN_NAMES.PROFILE)}>
          <Text style={styles.txt_button}> Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ticket;
