import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./aboutStyle";
import SwitchBar from "../TopBar/SwitchBar";
import MoviesType from "./MoviesType";
import Button from "../Button/Button";

const about = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          style={styles.ImageStyle}
          source={require("../../assets/img/abouts/Video.png")}
        />
      </View>
      <View style={styles.containerRating}>
        <View style={[styles.flexItem, styles.borderStyle]}>
          <Text style={styles.fontStyle}>8.3</Text>
          <Text style={styles.subfontStyle}>IMDB</Text>
        </View>
        <View style={[styles.flexItem]}>
          <Text style={styles.fontStyle}>7.9</Text>
          <Text style={styles.subfontStyle}>Kinopoisk</Text>
        </View>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.Description}>
          When the Riddler, a sadistic serial killer, begins murdering key
          political figures in Gotham, Batman is forced to investigate the
          city's hidden corruption and question his family's involvement.
        </Text>
        <MoviesType />
      </View>
      <View style={styles.ButtonBackground}>
        <Button
          TypeTagChild={'Text'}
          content={'Select session'}
          style={styles.ButtonSelectSession}
          ContentStyle={styles.fontStyle}/>
      </View>
    </View>
  );
};

export default about;
 