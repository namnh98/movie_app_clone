import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import SwitchBar from '../../components/TopBar/SwitchBar';
import About from '../../components/about/about';

const DetailScreen = () => {

  return (
    <View style={styles.container}>
      <SwitchBar/>
      <About/>
    </View>
  );
};

export default DetailScreen;
