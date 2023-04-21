import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch
} from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
import CardTimeMovie from './components/cardTimeMovie';

const Session = props => {
  const { navigation } = props;

  const [open, setOpen] = React.useState(false);
  const toggleSwitch = () => {
    setOpen(previousStage => !previousStage);
    console.log('value change');
  };
  return (
    <View style={styles.container}>
      {/* // star about   */}
      {/* //start sessions */}
      <View style={styles.Sessions}>
        <View style={styles.header_session}>
          <View style={styles.ss_calender}>
            <TouchableOpacity>
              <Image source={require('../../assets/calender.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.txt_calender}>April, 18</Text>
          </View>
          <View style={styles.ss_calender}>
            <TouchableOpacity>
              <Image source={require('../../assets/Time.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.txt_calender}>Time ↑</Text>
          </View>
          <View style={styles.ss_calender}>
            <Switch
              trackColor={{ false: '#253554', true: '#FF8036' }}
              thumbColor={open ? '#FFFFFF' : '#637394'}
              onValueChange={toggleSwitch}
              ios_backgroundColor="#637394"
              value={open}></Switch>
            <Text style={styles.txt_switch}>By cinema</Text>
          </View>
        </View>

        <SafeAreaView style={styles.header_ss_2}>
          <View>
            <Text style={styles.txt_time}>Time </Text>
          </View>

          <View style={styles.session_group}>
            <Text style={styles.txt_group}>Adult</Text>
            <Text style={styles.txt_group}>Child</Text>
            <Text style={styles.txt_group}>Student</Text>
            <Text style={styles.txt_group}>VIP</Text>
          </View>
        </SafeAreaView>

        <View style={styles.container_list}>
          <ScrollView contentContainerStyle={{ paddingBottom: 60 }} bounces={false}>
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
            <CardTimeMovie />
          </ScrollView>
        </View>
      </View>
      {/* //end sesssion */}
    </View>
  );
};

export default Session;
