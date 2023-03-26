import AppHeader from '@components/AppHeader';
import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface HomeProps {
  [key: string]: any;
}

const Home: FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
    </View>
  );
};

export default Home;
