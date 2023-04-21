import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
const select_seat = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.OVERVIEW);
          }}>
          <Image
            source={require('../../assets/Back.png')}
            activeOpacity={0.2}
            style={styles.ImageIconStyle}></Image>
        </TouchableOpacity>
        <View style={styles.txt_header}>
          <Text style={styles.txt_top}> Eurasia Cinema</Text>
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
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>4</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>5</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>6</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>7</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>8</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>9</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>10</Text>
            </View>
            <View style={styles.seat_list}>
              <Text style={styles.txt_seat}>11</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(SCREEN_NAMES.PAY)}>
          <Text style={styles.txt_button}> Buy 2 tickets • 3200 ₸</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default select_seat;
