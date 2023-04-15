import { Text, View, Image, ScrollView, Modal } from "react-native";
import React from "react";
import styles from "./SelectSeatStyle";
import SelectSeatsBar from "../../components/TopBar/SelectSeatsBar";
import Icons from "../../components/TagIcon/Icons";
import StausIcon from "../../components/TagIcon/StausIcon";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAME } from "../../constants/screenNames";
import ModalViewCS from "../../components/Modals/ModalViewCS";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";

const SelectSeat = () => {
  const navigation = useNavigation();
  const [isZoom, setisZoom] = React.useState(false);
  const [SelectedSeats, setSelectedSeats] = React.useState([]);
  const [isModal,setisModal] = React.useState(false)
  const [currSeat,setcurrSeat] = React.useState('')
  const [isSubModal,setisSubModal] = React.useState(false)
  const typeBoard = [
    {
      type: 'Adult',
      price: '2000'
    },
    {
      type: 'Child',
      price: '1000'
    },
    {
      type: 'Student',
      price: '1500'
    }
  ]
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
  const isFound = (seat) => {
    let rs = SelectedSeats.some((Element) => {
      if (Element.id === seat.id) {
        return true;
      }
      return false;
    });
    return rs;
  };
  const removeElement = (e) => {
    let array = Array.from(SelectedSeats);
    let index = array.findIndex(
      (Element) => JSON.stringify(Element) === JSON.stringify(e)
    );
    if (index !== -1) {
      array.splice(index, 1);
      setSelectedSeats(array);
    }
  };

  const onPressSeat = (e) => {
    if (!isFound(e)) {
      setSelectedSeats(SelectedSeats.concat(e));
    } else {
      removeElement(e);
    }
    setisModal(!isModal)
    setcurrSeat(e.id)
  };

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
            isFound(e) ? { backgroundColor: "rgba(255, 128, 54, 1)" } : {},
          ]}
        />
      );
    });
    return rs;
  };
  const renderModal = (seat) => {
    return ( 
      <ModalViewCS
      titleContent={'Select ticket type'}
      SubContent={seat}
      renderContent={ModalContent()}/>
    )
  }
  const renderSubModal = (e) => {
      return (
        <ModalViewCS
          titleContent={currSeat}
          SubTitle={false}
          renderContent={() => {
            return(
              <Button
                key={e.type}
                TypeTagChild={'Text'}
                Renderchilds={BtnTexts(e.type,e.price + '₸')}
                alotContet={true}></Button>
            )
          }}
        ></ModalViewCS>
      )
  }
  const ModalContent = () => {
    return (
      <View >
        {
          typeBoard.map((e) => {
            return <Button
            key={e.type}
            TypeTagChild={'Text'}
            Renderchilds={BtnTexts(e.type,e.price + '₸')}
            alotContet={true} 
            onPress={()=>{
              setisSubModal(!isSubModal)
            }}/>
          })
        }
      </View>
    )
  }
  const BtnTexts = (type,price) => {
    return (
      <View style={styles.boxTextBtn}>
        <Text style={styles.Title}>{type}</Text>
        <Text style={styles.subText}>{price}</Text>
      </View>
    )
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
        onPress={() => navigation.navigate(SCREEN_NAME.PAY)}
      />

      <Modal
      animationType="slide"
      transparent={true}
      visible={isModal}
      onRequestClose={() => {
        setisModal(!isModal)
      }}>
        <TouchableOpacity 
          style={styles.ModalBtns}
          onPress={() => setisModal(!isModal)}>
           <TouchableHighlight>
            {renderModal(currSeat)}
           </TouchableHighlight>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isSubModal}
        onRequestClose={() => {
          setisSubModal(!isSubModal)
        }}>
          <TouchableOpacity 
            style={styles.ModalBtns}
            onPress={() => setisSubModal(!isSubModal)}>
            <TouchableHighlight>
              {renderSubModal()}
            </TouchableHighlight>
          </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SelectSeat;
