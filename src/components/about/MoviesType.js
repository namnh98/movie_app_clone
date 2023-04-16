import { Text, View } from 'react-native';
import React from 'react';
import styles from './MoviesTypeStyle';

const MoviesType = (props) => {
  const { obj } = props;
  const RenderBoxIcon = (key, value) => {
    return (
      <View style={styles.line}>
        <Text style={[styles.fontKey, styles.setWidth]}>{key}</Text>
        <View style={styles.iconValue}>
          <Text style={styles.fontValue}>{value}</Text>
        </View>
      </View>
    );
  };
  const RenderText = (key, value) => {
    return (
      <View style={styles.line}>
        <Text style={[styles.fontKey, styles.setWidth]}>{key}</Text>
        <Text style={[styles.fontValue]}>{value}</Text>
      </View>
    );
  };
  const RenderChilds = () => {
    const MovieDetailstoArr = Object.entries(obj);
    const ReactFrags = MovieDetailstoArr.map(([key, value]) => {
      return key === 'Certificate'
        ? RenderBoxIcon(key, value)
        : RenderText(key, value);
    });
    return ReactFrags;
  };
  return <View style={styles.container}>{RenderChilds()}</View>;
};

export default MoviesType;
