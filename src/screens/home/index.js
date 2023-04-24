import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button/Button';
import CardCar from '../../components/Card/CardCar';
import HomeBar from '../../components/TopBar/HomeBar';
import {  MovieData2 } from '../../constants/MovieData';
import { SCREEN_NAME } from '../../constants/screenNames';
import styles from './styles';
import { scale } from 'react-native-utils-scale';

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderItemMovies = ({ item, index }) => {
    return (
      <CardCar
        data={item}
        container2={[
          index % 2 === 0 ? {marginRight:scale(60)} : {},
          {marginBottom:scale(80)}
        ]}
        onPress={() => navigation.navigate(SCREEN_NAME.DETAIL)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HomeBar LoginOnpress={() => navigation.navigate(SCREEN_NAME.PROFILE)} />
      <View style={styles.content}>
        <View style={styles.Header}>
          <Text style={styles.title}>{'Now in cinemas'}</Text>
          <Button
            TypeTagChild={'icon'}
            PatchImage={require('../../assets/img/icons/Search.png')}
            style={styles.BtnSeacrch}
          />
        </View>
        <FlatList
          data={MovieData2}
          renderItem={renderItemMovies}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.FlatListContainerStyle}
          ListEmptyComponent={() => <Text>{'Trống'}</Text>}
        />
      </View>
    </View>
  );
};

export default HomeScreen;


