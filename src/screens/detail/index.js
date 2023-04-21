import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { SCREEN_NAMES } from '../../constants/screenNames';
import Session from '../sessions';

const LIST_TAB = [
  {
    id: 1,
    name: 'About'
  },
  {
    id: 2,
    name: 'Sessions'
  }
];

const Detail = props => {
  const { navigation } = props;
  const [open, setOpen] = useState(false);
  const [tabPressed, setTabPressed] = useState('About');

  const toggleSwitch = () => {
    setOpen(previousStage => !previousStage);
  };

  const pressTab = tabText => {
    setTabPressed(tabText);
  };

  return (
    <View style={styles.container}>
      {/* // star about   */}

      <View style={styles.header_detail}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN_NAMES.HOME);
          }}>
          <Image
            source={require('../../assets/Back.png')}
            activeOpacity={0.2}
            style={styles.ImageIconStyle}></Image>
        </TouchableOpacity>

        <Text style={styles.txt_detail}>The Batman</Text>
        <Text />
      </View>
      <View style={styles.tabs_detail}>
        {LIST_TAB.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => pressTab(item.name)} key={`${item.id}${index}`}>
              <Text style={tabPressed === item.name ? styles.caption_1 : styles.caption}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {tabPressed === 'About' ? (
        <>
          <View style={styles.video_detail}>
            <Image source={require('../../assets/play_img.png')} style={styles.video}></Image>
            <TouchableOpacity>
              <Image source={require('../../assets/Play_Button.png')} style={styles.button_video} />
            </TouchableOpacity>
          </View>

          <View style={styles.rating_row}>
            <View style={styles.Item}>
              <Text style={styles.number}>8.3</Text>
              <Text style={styles.txt_rating}>IMDB</Text>
            </View>
            <View style={styles.Item}>
              <Text style={styles.number}>7.9</Text>
              <Text style={styles.txt_rating}>Kinopoisk</Text>
            </View>
          </View>

          <View style={styles.Content}>
            <Text style={styles.description}>
              When the Riddler, a sadistic serial killer, begins murdering key political figures in
              Gotham, Batman is forced to investigate the city's hidden corruption and question his
              family's involvement.
            </Text>

            <View style={styles.Params}>
              <View style={styles.param_row}>
                <Text style={styles.txt_left}>Certificate</Text>
                <Text style={styles.txt_left}>Runtime</Text>
                <Text style={styles.txt_left}>Release</Text>
                <Text style={styles.txt_left}>Genre</Text>
                <Text style={styles.txt_left}>Director</Text>
                <Text style={styles.txt_left}>Cast</Text>
              </View>

              <View style={styles.param_row2}>
                <Text style={styles.txt_right}>16+</Text>
                <Text style={styles.txt_right}>02:56</Text>
                <Text style={styles.txt_right}>2022</Text>
                <Text style={styles.txt_right}>Action, Crime, Drama</Text>
                <Text style={styles.txt_right}>Matt Reeves</Text>
                <Text style={styles.txt_right}>
                  Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul Dano, John
                  Turturro, Andy Serkis, Peter Sarsgaard
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <Session />
      )}

      {/* //end about */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.Button_footer}
          onPress={() => navigation.navigate(SCREEN_NAMES.SESSION)}>
          <Text activeOpacity={0.2} style={styles.Button_footer_txt}>
            Select session
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
