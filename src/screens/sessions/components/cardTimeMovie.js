import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_NAMES } from '../../../constants/screenNames';
import { useNavigation } from '@react-navigation/native';
const CardTimeMovie = props => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.boder_list}>
        <View style={styles.group_boder_left}>
          <Text style={styles.txt_list_left_1}>14:40 </Text>
          <Text style={styles.txt_list_left_2}>Рус </Text>
        </View>
        <View style={styles.group_boder_right}>
          <TouchableOpacity onPress={() => setOpen(pre => !pre)}>
            <Text style={styles.txt_list_right_1}>Eurasia Cinema </Text>
          </TouchableOpacity>
          <View style={styles.group_list_right}>
            <Text style={styles.txt_list_right_1}>2200 ₸ </Text>
            <Text style={styles.txt_list_right_1}>1000 ₸ </Text>
            <Text style={styles.txt_list_right_1}>1500 ₸ </Text>
            <Text style={styles.txt_list_right_2}> . </Text>
          </View>
        </View>
      </View>
      {open && (
        <View style={styles.border_dropdown}>
          <View style={styles.br_dropdown}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.OVERVIEW)}>
                <Text style={styles.txt_dr_left}>Eurasia Cinema7</Text>
              </TouchableOpacity>
              <Text style={styles.txt_dr_left_bottom}>ул. Петрова, д.24, ТЦ "Евразия"</Text>
            </View>
            <View>
              <Text style={styles.txt_dr_right}> 1.5km</Text>
            </View>
          </View>

          <View style={styles.boder_list}>
            <View style={styles.group_boder_left}>
              <Text style={styles.txt_list_left_1}>14:40 </Text>
              <Text style={styles.txt_list_left_2}>Рус </Text>
            </View>
            <View style={styles.group_boder_right}>
              <View style={styles.group_list_right}>
                <Text style={styles.txt_list_right_1}>2200 ₸ </Text>
                <Text style={styles.txt_list_right_1}>1000 ₸ </Text>
                <Text style={styles.txt_list_right_1}>1500 ₸ </Text>
                <Text style={styles.txt_list_right_2}> . </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CardTimeMovie;

const styles = StyleSheet.create({
  boder_list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#1A2232',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 2
  },
  group_boder_left: {
    borderRightWidth: 1,
    borderRightColor: '#253554',
    marginLeft: 20
  },
  txt_list_left_1: {
    color: 'white',
    fontSize: 20,
    marginRight: 20
  },
  txt_list_left_2: {
    color: '#637394',
    marginLeft: 16,
    marginTop: 5
  },

  group_boder_right: {
    marginRight: 40
  },

  group_list_right: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt_list_right_1: {
    color: 'white',
    fontSize: 16,
    marginRight: 20
  },
  txt_list_right_2: {
    color: '#637394',
    fontWeight: 'bold',
    fontSize: 16
  },
  //dropdown
  br_dropdown: {
    backgroundColor: '#1A2232',

    flexDirection: 'row',
    justifyContent: 'space-around',

    paddingTop: 20
  },
  txt_dr_left: {
    color: 'white',
    fontSize: 20
  },
  txt_dr_left_bottom: {
    color: '#637394',
    fontSize: 16
  },
  txt_dr_right: {
    color: '#637394',
    fontSize: 16
  }

  //end dropdown
});
