import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CardMovie = props => {
  const { imgUrl } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREEN_NAMES.DETAIL);
      }}>
      <Image source={imgUrl} activeOpacity={0.2} />
    </TouchableOpacity>
  );
};

export default CardMovie;
