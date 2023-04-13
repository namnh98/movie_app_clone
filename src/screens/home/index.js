import { View, Text, Modal, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import HomeBar from '../../components/TopBar/HomeBar';
import Button from '../../components/Button/Button';
import CardCar from '../../components/Card/CardCar';
import { MovieData, MovieData2 } from '../../constants/MovieData';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../constants/screenNames';
const HomeScreen = () => {

  const navigation = useNavigation()
  const renderItemMovies = ({ item, index }) => {
    return <CardCar
      data={item}
      container2={[index % 2 === 0 ? { marginRight: '27%' } : {}, { marginBottom: '20%' }]}
      onPress={() => navigation.navigate(SCREEN_NAME.DETAIL)}/>
  }
  React.useEffect(() => {


  }, [])

  return (
    <View style={styles.container}>
      <HomeBar 
        LoginOnpress={() => navigation.navigate(SCREEN_NAME.PROFILE)}/>
      <View style={styles.content}>
        <View style={styles.Header}>
          <Text
            style={styles.title}>
            Now in cinemas
          </Text>
          <Button
            TypeTagChild={'icon'}
            PatchImage={require('../../assets/img/icons/Search.png')}
            style={styles.BtnSeacrch} />
        </View>
        <FlatList
          data={MovieData2}
          renderItem={renderItemMovies}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ItemSeparatorComponent={<View style={styles.Separator} />}
          contentContainerStyle={styles.FlatListContainerStyle} />
      </View>
    </View>
  );
};

export default HomeScreen;

//showsVerticalScrollIndicator an scroll cua flatlist