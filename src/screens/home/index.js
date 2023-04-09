import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import HomeBar from '../../components/TopBar/HomeBar';
import Button from '../../components/Button/Button';
import CardCar from '../../components/Card/CardCar';

const HomeScreen = () => {
  let MovieList = [];

  const RenderCardCarList = () => {
    for (var i = 0; i < 11; i++) {
      MovieList.push(
        <CardCar key={i} container2={i % 2 === 0 ? { marginRight: '26%' } : { marginRight: 0 }} />
      );
    }
    return MovieList;
  };

  return (
    <View style={styles.container}>
      <HomeBar />
      <View style={styles.content}>
        <View style={styles.Header}>
          <Text style={styles.title}>Now in cinemas</Text>
          <Button
            TypeTagChild={'icon'}
            PatchImage={require('../../assets/img/icons/Search.png')}
            style={styles.BtnSearch}
          />
        </View>
        <ScrollView style={styles.ListContainer}>
          <View style={styles.CardCarList}>{RenderCardCarList()}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
