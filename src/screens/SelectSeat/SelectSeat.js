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
  const navigation = useNavigation();
  const [isZoom, setisZoom] = React.useState(false);
  const [SelectedSeats,setSelectedSeats] = React.useState([]);
  let totalSeats = [];
  for (let i = 0; i < 100; i++) {
    totalSeats.push({
      id:`seat${i+1}`,
      lable:`${i+1}`
    });
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
  const isFound = (seat) => {
    let rs = SelectedSeats.some(Element => {
      if(Element.id === seat.id){
        return true
      }
      return false
    })
    return rs
  }
  const removeElement = (e) =>{
    let array = Array.from(SelectedSeats)
    let index = array.findIndex((Element) => Element.id === e.id && Element.lable === e.lable)
    if(index !== -1){
      array.splice(index, 1);
      setSelectedSeats(array)
    }
  }

  const onPressSeat = (e) =>{
      if(!isFound(e)){
        setSelectedSeats(SelectedSeats.concat(e))
      }else{
        removeElement(e)
      }
  }

  const renderSeatsBtn = () => {
    let rs = totalSeats.map((e) => {
      return (
        <Button
          key={e.id}
          TypeTagChild={"Text"}
          content={e.lable}
          ContentStyle={{ color: "white" }}
          onPress={() => onPressSeat(e)}
          ContainerStyle={[
            styles.btnSeats,
            { marginBottom: "2%", marginHorizontal: "1%" },
            isFound(e) ? {backgroundColor:'rgba(255, 128, 54, 1)'} : {}
          ]}
        />
      );
    });
    return rs;
  };
  return (
    <View style={styles.container}>
      <SelectSeatsBar ZoomPress={() => setisZoom(!isZoom)} />
      <View style={styles.TagList}>
        <StausIcon status={"Available"} text={"Available"} />
        <StausIcon status={"Occupied"} text={"Occupied"} />
        <StausIcon status={"Chosen"} text={"Chosen"} />
      </View>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.ListIcon}
        style={{}}
      >
        <Image
          source={require("../../assets/img/icons/Screen.png")}
          style={{ width: "100%" }}
        />
        {isZoom !== true ? renderIcon() : renderSeatsBtn()}
      </ScrollView>
      <Button
        content={'Buy tickets'}
        ContentStyle={styles.fontbtn}
        TypeTagChild={'Text'}
        style={styles.buyBtn}
        onPress={() => navigation.navigate(SCREEN_NAME.PAY)}/>
    </View>
  );
};

export default SelectSeat;
