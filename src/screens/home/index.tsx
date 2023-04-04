import { IC_Search } from '@assets/icons';
import { IMG_SampleMovie } from '@assets/images';
import AppButton from '@components/AppButton';
import AppHeader from '@components/AppHeader';
import AppText from '@components/AppText';
import { useNavigation } from '@react-navigation/core';
import { MainStackParams } from '@routes/types';
import React, { FC, useCallback, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { Image, View } from 'react-native';
import MovieItem from './components/MovieItem';
import styles from './styles';
import { HomeProps, MovieItemProps } from './types';
import { DEVICE } from '@constants/scale';
import { formatData } from '@helpers/convert';
import { useDispatch } from 'react-redux';
import { getListMovieHandler } from '@redux-app/actions/movie';

const DUMMY_DATA = [
  { id: 1, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 2, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 3, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 4, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 5, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 6, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 7, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 8, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 9, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 10, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie },
  { id: 11, name: 'The Batman', type: 'action', rating: 8.1, image: IMG_SampleMovie }
];

const HomeScreen: FC<HomeProps> = () => {
  const navigation = useNavigation<MainStackParams>();
  const isLandscape = DEVICE.WIDTH > DEVICE.HEIGHT;
  const dispatch = useDispatch();

  const getListMovie = useCallback(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'e3590b9f5dmsh2fdba8c41a2c970p139e42jsnfc569da06f2d',
    //     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //   }
    // };
    // fetch('https://moviesdatabase.p.rapidapi.com/titles', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    getListMovie();
  }, []);

  const pressRightHeader = () => {
    Alert.alert('Thông báo', 'Chức năng đang phát triển');
  };

  const pressSearch = () => {};

  const renderMovieItem = ({ item, index }: { item: MovieItemProps; index: number }) => {
    return <MovieItem data={item} />;
  };

  return (
    <View style={styles.container}>
      <AppHeader titleRight={'Log in'} onPressRight={pressRightHeader} />
      <View style={styles.bodyContainer}>
        <View style={styles.topSection}>
          <AppText styleText={styles.titleTopSection}>{'Now in cinemas'}</AppText>
          <AppButton
            content={() => (
              <>
                <Image source={IC_Search} />
              </>
            )}
            onPressButton={pressSearch}
          />
        </View>
        <FlatList
          data={formatData(DUMMY_DATA, 2)}
          renderItem={renderMovieItem}
          keyExtractor={(item: MovieItemProps, index: number) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
