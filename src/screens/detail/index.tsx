import { View, Text } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

interface DetailProps {}

const DetailScreen: FC<DetailProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
};

export default DetailScreen;
