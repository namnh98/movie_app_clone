import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './SesssionStyle';
import { CalenderData } from '../../constants/MovieData';
import ContentItem from './ContentItem';

const Sessions = () => {
  const [isEnabled, setisEnabled] = React.useState(false);

  const renderItemFlatList = ({ item, id }) => {
    return <ContentItem />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.ControlList}>
        <TouchableOpacity style={styles.ControlItem}>
          <Image source={require('../../assets/img/icons/Calender.png')} />
          <Text style={styles.fontStyle}>April, 18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ControlItem}>
          <Image source={require('../../assets/img/icons/Short.png')} />
          <Text style={styles.fontStyle}>Time ↑</Text>
        </TouchableOpacity>
        <View style={styles.ControlItem}>
          <Switch
            trackColor={{ false: '#253554', true: '#FF8036' }}
            value={isEnabled}
            thumbColor={isEnabled ? '#FFFFFF' : '#637394'}
            onValueChange={() => setisEnabled(!isEnabled)}
            hitSlop={5}
            style={styles.SwitchBtn}
          />
          <Text style={styles.fontStyle}>By cinema</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          scrollEnabled={false}
          style={styles.Content}
          data={CalenderData}
          renderItem={renderItemFlatList}
          keyExtractor={(item) => item.key}
        />
      </ScrollView>
    </View>
  );
};

export default Sessions;
