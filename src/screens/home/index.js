import { View, Text, Modal, TouchableOpacity,Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import HomeBar from '../../components/TopBar/HomeBar';
import Button from '../../components/Button/Button';
import CardCar from '../../components/Card/CardCar';
import { MovieData } from '../../constants/MovieData';
// import { Api, getApi } from '../../services/Api';

const HomeScreen = () => {
  
  const renderItemMovies = ({item,index}) => {
    return  <CardCar 
        data={item} 
        container2={[index % 2 === 0 ? {marginRight:'27%'} : {},{marginBottom:'20%'}]}/>
  }

  return (
    <View style={styles.container}>
      <HomeBar/>
      <View style={styles.content}>
        <View style={styles.Header}>
          <Text 
            style={styles.title}>
              Now in cinemas
          </Text>
          <Button
            TypeTagChild={'icon'}
            PatchImage={require('../../assets/img/icons/Search.png')}
            style={styles.BtnSeacrch}/>
        </View>
        <FlatList
              data={MovieData}
              renderItem={renderItemMovies}
              keyExtractor={(item) => item.id}
              numColumns={2}
              ItemSeparatorComponent={<View style={styles.Separator}/>}
              contentContainerStyle={styles.FlatListContainerStyle}/>
        
        
      </View>
    </View>
  );
};

export default HomeScreen;

//showsVerticalScrollIndicator an scroll cua flatlist