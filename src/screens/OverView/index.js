import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
const overview = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SESSION)}>
          <Image
            source={require('../../assets/Back.png')}
            activeOpacity={0.2}
            style={styles.ImageIconStyle}></Image>
        </TouchableOpacity>
        <View style={styles.txt_header}>
          <Text style={styles.txt_top}> Eurasia Cinema7 </Text>
          <Text style={styles.txt_bottom}>The Batman </Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/Enlarge.png')}
            activeOpacity={0.2}
            style={styles.ImageIconStyle}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.Date_Time}>
        <View style={styles.Date}>
          <Text style={styles.txt_date}> April, 14 </Text>
        </View>
        <View style={styles.Time}>
          <Text style={styles.txt_date}> 15:10 </Text>
        </View>
      </View>
      <View style={styles.seat_map}>
        <View style={styles.symbols}>
          <View style={styles.items}>
            <Text style={styles.seat}> </Text>
            <Text style={styles.available}>Available</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.seat}> </Text>
            <Text style={styles.available}>Occupied</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.seat}> </Text>
            <Text style={styles.available}>Chosen</Text>
          </View>
        </View>

        <View style={styles.screens}>
          <Image
            source={require('../../assets/Screen.png')}
            activeOpacity={0.2}
            style={styles.ImageIconStyle}></Image>
        </View>
        <View style={styles.list_row}>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.SELECT_SEAT)}>
              <Text style={styles.seat_list}> </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default overview;
