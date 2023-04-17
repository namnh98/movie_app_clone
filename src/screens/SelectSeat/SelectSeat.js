import { Text, View, Image, ScrollView, Modal } from "react-native";
import React , {useState} from "react";
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
  const [isZoom, setisZoom] = useState(false);
  const [SelectedSeats, setSelectedSeats] = useState([]);
  const [isModal, setisModal] = useState(false);
  const [currSeat, setcurrSeat] = useState({});
  const [isSubModal, setisSubModal] = useState(false);
  const [type,setType] = useState({
    type: "Adult",
    price: "2000"
  })
  console.log(SelectedSeats)
  const typeBoard = [
    {
      type: "Adult",
      price: "2000",
    },
    {
      type: "Child",
      price: "1000",
    },
    {
      type: "Student",
      price: "1500",
    },
  ];
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
  const removeElement = (SelectedSeats) => {
    let array = Array.from(SelectedSeats);
    let index = array.findIndex(
      (Element) => JSON.stringify(Element) === JSON.stringify({...currSeat,...type}) || Element.id === currSeat.id
    );
    if (index !== -1) {
      array.splice(index, 1);
      setSelectedSeats(array);
    }
  };

  const onPressSeat = (e) => {
    setcurrSeat(e)
    if (!isFound(e)) {
      setSelectedSeats(SelectedSeats.concat(e));
      setisModal(!isModal);
    }else{
      setisSubModal(true)
    }
    
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
        titleContent={"Select ticket type"}
        SubContent={seat.id}
        renderContent={ModalContent()}
      />
    );
  };
  const renderSubModal = () => {
    return (
      <ModalViewCS
        titleContent={currSeat.id}
        SubTitle={false}
        renderContent={ 
          <React.Fragment>
            <Button
              TypeTagChild={"Text"}
              Renderchilds={BtnTexts('bao tri', 'bao tri')}
              alotContet={true}
            />
            <Button
              TypeTagChild={'Text'}
              ContainerStyle={styles.removeSeatButton}
              ContentStyle={styles.Title}
              content={'Deselect this seat'}
              onPress={() => {
                removeElement(SelectedSeats)
                setisSubModal(!isSubModal)
                setisModal(false)
              }}
              />
          </React.Fragment>  
        }
      />
    )
  }
  const ModalContent = () => {
    return (
      <View>
        {
        typeBoard.map((e) => {
          return (
            <Button
              key={e.type}
              TypeTagChild={"Text"}
              Renderchilds={BtnTexts(e.type, e.price + "₸")}
              alotContet={true}
              onPress={() => {
                
              }}
            />
          );
        })
        }
      </View>
    );
  };
  const BtnTexts = (type, price) => {
    return (
      <View style={styles.boxTextBtn}>
        <Text style={styles.Title}>{type}</Text>
        <Text style={styles.subText}>{price}</Text>
      </View>
    );
  };
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
        transparent={true}
        animationType="slide"
        visible={isModal}
        onRequestClose={() => setisModal(!isModal)}>
        <TouchableOpacity style={styles.ModalBtns} onPress={() => {setisModal(!isModal)}}>
          <TouchableHighlight>
            {renderModal(currSeat)}
          </TouchableHighlight>
        </TouchableOpacity>
      </Modal>

      <Modal 
          transparent={true}
          animationType="slide"
          visible={isSubModal}
          onRequestClose={() => setisSubModal(!isSubModal)}>
            <TouchableOpacity style={styles.ModalBtns} onPress={() => {setisSubModal(!isSubModal)}}>
              <TouchableHighlight>
                {renderSubModal(type)}
              </TouchableHighlight>
            </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SelectSeat;
