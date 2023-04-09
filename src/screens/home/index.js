import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import HomeBar from '../../components/TopBar/HomeBar';
import Button from '../../components/Button/Button';
import CardCar from '../../components/Card/CardCar';
import { MOVIE_LIST } from '../../utils/dummyData';

const HomeScreen = () => {
  const renderMovieItem = ({ item, index }) => {
    return <CardCar data={item} />;
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
        <FlatList
          bounces={false}
          data={MOVIE_LIST}
          renderItem={renderMovieItem}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingBottom: 32
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
