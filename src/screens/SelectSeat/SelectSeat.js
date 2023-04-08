import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./SelectSeatStyle";
import SelectSeatsBar from "../../components/TopBar/SelectSeatsBar";
import Icons from "../../components/TagIcon/Icons";
import StausIcon from "../../components/TagIcon/StausIcon";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAME } from "../../constants/screenNames";

const SelectSeat = () => {
  const navigation=useNavigation()
  const renderIcon = () => {
    let totalSeats = [];

    for (let i = 0; i < 154; i++) {
      totalSeats.push(i + 1);
    }
    let rs = totalSeats.map((e, i) => {
      return (
        <View key={i} style={styles.paddingSeat}>
          <Icons StatusIc={"Available"} />
        </View>
      );
    });
    return rs;
  };
  return (
    <View style={styles.container}>
      <SelectSeatsBar />
      <View style={styles.TagList}>
        <StausIcon status={"Available"} text={"Available"} />
        <StausIcon status={"Occupied"} text={"Occupied"} />
        <StausIcon status={"Chosen"} text={"Chosen"} />
      </View>
      <View style={styles.ListIcon}>
        <Image
          source={require("../../assets/img/icons/Screen.png")}
          style={{ width: "100%" }}
        />
        {renderIcon()}
      </View>
      <Button
        content={'Buy 2 tickets • 3200 ₸'}
        TypeTagChild={'Text'}
        style={styles.buyBtn}
        onPress={() => navigation.navigate(SCREEN_NAME.PAY)}/>
    </View>
  );
};

export default SelectSeat;
