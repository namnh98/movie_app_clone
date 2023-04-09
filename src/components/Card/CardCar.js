import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React from 'react';
import styles from './CardCarStyle';

const CardCar = props => {
  const { container2, data, ...reset } = props;
  return (
    <TouchableOpacity style={[styles.container, container2]} {...reset}>
      <Image source={data.image} style={{ width: 164, height: 230, marginBottom: 8 }} />
      <Text style={styles.title_text}>{data.name}</Text>
      <Text style={styles.subTitle_text}>{data.type}</Text>
    </TouchableOpacity>
  );
};

export default CardCar;
