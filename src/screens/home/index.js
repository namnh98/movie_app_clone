import React from 'react';
import {
  Button,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Header from '../../components/Header';
import { SCREEN_NAMES } from '../../constants/screenNames';
import CardMovie from './components/CardMovie';
import styles from './styles';

const Home = props => {
  const { navigation } = props;
  return (
    // container 1
    <SafeAreaView>
      <ScrollView bounces={false}>
        <View style={styles.container}>
          <Header />
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
                <CardMovie imgUrl={require('../../assets/MovieCard.png')} />
                <CardMovie imgUrl={require('../../assets/MovieCard2.png')} />
              </View>
              <View style={styles.bg_movie}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard3.png')}
                    style={styles.movie_card}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard4.png')}
                    style={styles.movie_card}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.bg_movie}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard5.png')}
                    style={styles.movie_card}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require('../../assets/MovieCard6.png')}
                    style={styles.movie_card}
                  />
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
