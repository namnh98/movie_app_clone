import { Text, View, Image, ScrollView, Modal } from "react-native";
import React , {useEffect, useState} from "react";
import styles from "./SelectSeatStyle";
import SelectSeatsBar from "../../components/TopBar/SelectSeatsBar";
import Icons from "../../components/TagIcon/Icons";
import StausIcon from "../../components/TagIcon/StausIcon";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAME } from "../../constants/screenNames";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";
import ModalViewSelectSeat from "../../components/Modals/ModalViewSelectSeat";
import { isFound} from "../../constants/common";


  
const SelectSeat = () => {
  const navigation = useNavigation();
  const [SelectedSeats, setSelectedSeats] = useState([]); 
  const [isZoom, setisZoom] = useState(false);
  const [isModal,setisModal] = useState(false)  
  const [currSeat,setcurrSeat] = useState({})
  const [currType,setcurrType] = useState({})
  const [total,settotal] = useState({})

  console.log(SelectedSeats)

  let totalSeats = [];
  for (let i = 0; i < 100; i++) {
    totalSeats.push({
      id: `seat${i + 1}`,
      lable: `${i + 1}`,
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

  const RemoveElement = (obj) => {
    const arr = Array.from(SelectedSeats)
    const index = arr.findIndex((e) => {
      return e.id === obj.id
    })
    if(index !== -1){
      arr.splice(index,1)
    }
    setSelectedSeats(arr)
  }

  

  const onPressSeat = (e,i) => {
    setcurrSeat(e)
    setisModal(!isModal)
    
  };

  const DeSelectEvent = (currSeat) => {
    RemoveElement(currSeat)
    setisModal(false)
  }

  const renderSeatsBtn = () => { 
    const rs = totalSeats.map((e,i) => {
      return (
        <Button
          key={e.id}
          TypeTagChild={"Text"}
          content={e.lable}
          ContentStyle={{ color: "white" }}
          onPress={() => onPressSeat(e,i)}
          ContainerStyle={[
            styles.btnSeats,
            { marginBottom: "2%", marginHorizontal: "1%" },
            isFound(e,SelectedSeats) ? {backgroundColor:'rgba(255, 128, 54, 1)'} : {}
          ]}
        />
      );
    });
    
    return rs;
  };

  const DoneEvent = () => {
    setisModal(false)
    if(!isFound({...currSeat,...currType},SelectedSeats)){
      setSelectedSeats(SelectedSeats.concat({...currSeat,...currType}))
    }
  }

  const ButtonEvent = (e) => {
    setcurrType(e)
    if(isFound({...currSeat,...currType},SelectedSeats)){
      const index = SelectedSeats.findIndex((obj) => {
        return obj.id === currSeat.id
      })
        SelectedSeats[index].type = e.type
        SelectedSeats[index].price =e.price
    }
    
  }

  return (
    <View style={styles.container}>
      <SelectSeatsBar BtnRightOnPress={() => setisZoom(!isZoom)} />
      <View style={styles.TagList}>
        <StausIcon status={"Available"} text={"Available"} />
        <StausIcon status={"Occupied"} text={"Occupied"} />
        <StausIcon status={"Chosen"} text={"Chosen"} />
      </View>
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.ListIcon}>
        <Image
          source={require("../../assets/img/icons/Screen.png")}
          style={{ width: "100%" }}
        />
        {isZoom !== true ? renderIcon() : renderSeatsBtn()}
      </ScrollView>
      <Button
        content={"Buy tickets"}
        ContentStyle={styles.fontbtn}
        TypeTagChild={"Text"}
        style={styles.buyBtn}
        onPress={() => navigation.navigate(SCREEN_NAME.PAY,SelectedSeats)}
      />
      <Modal
      transparent={true}
      animationType="slide"
      visible={isModal}
      onRequestClose={() => setisModal(!isModal)}>
        <TouchableOpacity
        style={styles.ModalBtns}
        onPress={() => setisModal(!isModal)}>
          <TouchableHighlight>
            <ModalViewSelectSeat
              Currenttype={currType}
              CurrentSeat={currSeat}
              DeSelectOnPress={() => DeSelectEvent(currSeat)}
              arr={SelectedSeats}
              ButtonTypesOnPress={ButtonEvent}
              DoneOnPress={() => DoneEvent()}/>
          </TouchableHighlight>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SelectSeat;
