import { Text, View, Image, ScrollView } from "react-native";
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
  const [isZoom,setisZoom] = React.useState(false)
    let totalSeats = [];
    for (let i = 0; i < 154; i++) {
      totalSeats.push(i);
    }
  const renderIcon = () => {
    let rs = totalSeats.map((e, i) => {
      return (
        <View key={i} style={styles.paddingSeat}>
          <Icons StatusIc={"Available"} />
        </View>
      );
    });
    return rs;
  };
  const renderSeatsBtn = () => {
    let rs = totalSeats.map((e,i) =>{
      return <Button 
        key={i}
        TypeTagChild={'Text'}
        content={`${i+1}`}
        style={[styles.btnSeats,{marginBottom:'2%',marginHorizontal:'1%'}]}
        ContentStyle={{color:'white'}}/>
    })
    return rs
  }
  return (
    <View style={styles.container}>
      <SelectSeatsBar ZoomPress={() => setisZoom(!isZoom)}/>
      <View style={styles.TagList}>
        <StausIcon status={"Available"} text={"Available"} />
        <StausIcon status={"Occupied"} text={"Occupied"} />
        <StausIcon status={"Chosen"} text={"Chosen"} />
      </View>
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.ListIcon} style={{}}>
        <Image
          source={require("../../assets/img/icons/Screen.png")}
          style={{ width: "100%"}}
        />
        {isZoom !==true ? renderIcon() : renderSeatsBtn()}
      </ScrollView>
      {/* <Button
        content={'Buy 2 tickets • 3200 ₸'}
        TypeTagChild={'Text'}
        style={styles.buyBtn}
        onPress={() => navigation.navigate(SCREEN_NAME.PAY)}/> */}
    </View>
  );
};

export default SelectSeat;
