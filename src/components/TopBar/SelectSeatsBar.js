import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./SelectSeatsBarStyle";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";

const SelectSeatsBar = (props) => {
  const {
    mode = "date",
    content = "Pay for tickets",
    PatchImageRight,
    BtnRightOnPress,
    ishideLeftBtn = true
  } = props;
  const navigation = useNavigation();

  const renderDate = () => {
    return (
      <View style={styles.dateAndTimeBtn}>
        <TouchableOpacity style={styles.ButtonStyle}>
          <Image source={require("../../assets/img/icons/Calender.png")} />
          <Text style={styles.btnfont}>April, 14</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle}>
          <Image source={require("../../assets/img/icons/Clock.png")} />
          <Text style={styles.btnfont}>15:10</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBoxTitle = () => {
    return (
      <View style={styles.TextBox}>
        <Text style={styles.Title}>Eurasia Cinema7</Text>
        <Text style={styles.SubTitle}>{content || 'err'}</Text>
      </View>
    );
  };
  const renderBtnLeft = () => {
    return (
      <Button
        TypeTagChild={"icon"}
        PatchImage={require("../../assets/img/icons/BackArrow.png")}
        onPress={() => navigation.goBack()}
      />
    )
  }
  return (
    <View
      style={[
        styles.container,
        mode === "date" ? { height: 160 } : { height: 100 },
      ]}
    >
      <View style={styles.TopBarContent}>
        {ishideLeftBtn ? renderBtnLeft() : <View />}
        {mode === "date" ? (
          renderBoxTitle()
        ) : (
          <Text style={styles.Title}>{content}</Text>
        )}
        <Button
          TypeTagChild={"icon"}
          PatchImage={
            mode === "date"
              ? require("../../assets/img/icons/Zoom.png")
              : PatchImageRight
          }
          onPress={BtnRightOnPress}
        />
      </View>
      {mode === "date" ? renderDate() : <View />}
    </View>
  );
};

export default SelectSeatsBar;
