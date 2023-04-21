import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from 'react-native';
import React from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';

const Home = props => {
  const { navigation } = props;
  return (
    // container 1
    <SafeAreaView>
      <ScrollView bounces={false}>
        <View style={styles.container}>
          <View style={styles.header_home}>
            <Image
              source={require('../../assets/Product_Logo.png')}
              style={styles.image_logo_home}></Image>
            <Text style={styles.text_home}>
              <Image source={require('../../assets/Vector.png')}></Image> Nur-Sultan
            </Text>
            <Text style={styles.text_home}>
              <Image source={require('../../assets/Vector2.png')}></Image> Eng
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREEN_NAMES.LOGIN);
              }}>
              <Text style={styles.text_home2}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* endcontainer 1 */}

          {/* start navigation */}

          <View style={styles.navigation}>
            <View style={styles.navi_header}>
              <Text style={styles.navi_text}> Now in cinemas </Text>

              <TextInput placeholder="Search" placeholderTextColor={'#637394'} style={styles.input}>
                {/* <Image
                  source={require('../../assets/Search.png')}
                  style={styles.search_icon}></Image> */}
              </TextInput>
            </View>

            <View style={styles.Content}>
              <View style={styles.bg_movie}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(SCREEN_NAMES.DETAIL);
                  }}>
                  <Image
                    source={require('../../assets/MovieCard.png')}
                    style={styles.movie_card}
                    activeOpacity={0.2}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard2.png')}
                    style={styles.movie_card}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bg_movie}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard3.png')}
                    style={styles.movie_card}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard4.png')}
                    style={styles.movie_card}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bg_movie}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard5.png')}
                    style={styles.movie_card}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard6.png')}
                    style={styles.movie_card}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
