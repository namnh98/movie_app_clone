import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
const pay = props => {
  const { navigation } = props;
  return (
    <View style={styles.container_pay}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
          <Image source={require('../../assets/Back.png')} style={styles.img_bar}></Image>
        </TouchableOpacity>

        <Text style={styles.txt_bar}>Pay for tickets </Text>
        <Text></Text>
      </View>

      <View style={styles.ticket}>
        <Text style={styles.txt_ticket}>The Batman </Text>
        <View style={styles.details}>
          <View style={styles.dt_left}>
            <Text style={styles.txt_left}>Cinema </Text>
            <Text style={styles.txt_left}> </Text>
            <Text style={styles.txt_left}>Date </Text>
            <Text style={styles.txt_left}> Hall</Text>
            <Text style={styles.txt_left}>Seats</Text>
          </View>
          <View style={styles.dt_right}>
            <Text style={styles.txt_right}>Eurasia Cinema7</Text>
            <Text style={styles.txt_left}>ул. Петрова, д.24, ТЦ "Евразия" </Text>
            <Text style={styles.txt_right}> 6 April 2022, 14:40</Text>
            <Text style={styles.txt_right}> 6th</Text>
            <Text style={styles.txt_right}> 7 row (7, 8)</Text>
          </View>
        </View>
        <View style={styles.bill}>
          <View style={styles.dt_left}>
            <Text style={styles.txt_left}>1 x Adult </Text>
            <Text style={styles.txt_left}>1 x Child</Text>
            <Text style={styles.txt_left}>2 total </Text>
          </View>

          <View style={styles.dt_right}>
            <Text style={styles.txt_right}>2200 ₸</Text>

            <Text style={styles.txt_right}>1000 ₸</Text>
            <Text style={styles.txt_right}>3200 ₸</Text>
          </View>
        </View>
      </View>
      <View style={styles.tear_line}>
        <Image source={require('../../assets/Tear_Line.png')} style={styles.img_tear}></Image>
      </View>

      <View style={styles.payment}>
        <TextInput
          style={styles.input}
          placeholder="Phone_number"
          placeholderTextColor="rgba(99, 115, 148, 1)"></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(SCREEN_NAMES.TICKET)}>
          <Text style={styles.txt_button}> Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default pay;
