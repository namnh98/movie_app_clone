import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './CardCarStyle';
import { EMPTY_STRING } from '../../constants/common';
import { IMG_MOVIE_MORBIUS } from '../../assets/img';

const CardCar = (props) => {
  const { data, container2, ...reset } = props;
  return (
    <TouchableOpacity style={[styles.container, container2]} {...reset}>
      <Image source={IMG_MOVIE_MORBIUS} style={styles.ImageMovie} />
      <View style={styles.boxContent}>
        <Text style={styles.title_text}>{data?.name || EMPTY_STRING}</Text>
        <Text style={styles.subTitle_text}>{data?.type || EMPTY_STRING}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardCar;
