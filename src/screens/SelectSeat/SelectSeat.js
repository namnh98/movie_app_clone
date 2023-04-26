import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button/Button';
import ModalViewSelectSeat from '../../components/Modals/ModalViewSelectSeat';
import Icons from '../../components/TagIcon/Icons';
import StausIcon from '../../components/TagIcon/StausIcon';
import SelectSeatsBar from '../../components/TopBar/SelectSeatsBar';
import { isFound } from '../../constants/common';
import { SCREEN_NAME } from '../../constants/screenNames';
import styles from './SelectSeatStyle';
import { useSelector, useDispatch } from 'react-redux';
import { SelectedSeatSL } from '../../redux/selector';
import { AddSeat, removeSeat } from '../../redux/actions';

const SelectSeat = () => {
  const navigation = useNavigation();
  const [isModal, setisModal] = useState(false);
  const [isZoom, setIsZoom] = useState(false);
  const [Seat, setSeat] = useState({})
  const [type, settype] = useState({})
  const SelectedSeats = useSelector(SelectedSeatSL)
  const dispatch = useDispatch()
  const { MovieData } = useRoute().params

  console.log(SelectedSeats)

  const totalSeats = useMemo(() => {
    const arr = []
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: `seat${i + 1}`,
        lable: `${i + 1}`,
      });
    }
    return arr
  }, []);

  const renderIcon = () => {
    const rs = totalSeats.map((e, i) => {
      return (
        <View key={i} style={styles.paddingSeat}>
          <Icons StatusIc={'Available'} />
        </View>
      );
    });
    return rs
  };


  const onPressSeat = (e) => {
    setSeat(e)
    setisModal(!isModal)
  };

  const DeSelectEvent = (currSeat) => {
    dispatch(removeSeat(currSeat))
    setisModal(false);
  };

  const renderSeatsBtn = () => {
    const rs = totalSeats.map((e, i) => {
      return (
        <Button
          key={e.id}
          TypeTagChild={'Text'}
          content={e.lable}
          ContentStyle={{ color: 'white' }}
          onPress={() => onPressSeat(e, i)}
          ContainerStyle={[
            styles.btnSeats,
            { marginBottom: '2%', marginHorizontal: '1%' },
            isFound(e, SelectedSeats)
              ? { backgroundColor: 'rgba(255, 128, 54, 1)' }
              : {},
          ]}
        />
      );
    });

    return rs;
  };

  const DoneEvent = () => {
    setisModal(false);
    if (!isFound({ ...Seat, ...type }, SelectedSeats)) {
      dispatch(AddSeat({ ...Seat, ...type }))
    }
  };

  const ButtonModalEvent = (e) => {
    settype(e)
    if (isFound({ ...Seat, ...type }, SelectedSeats)) {
      const index = SelectedSeats.findIndex((obj) => {
        return obj.id === Seat.id;
      });
      SelectedSeats[index].type = e.type
      SelectedSeats[index].price = e.price
    }
  };

  return (
    <View style={styles.container}>
      <SelectSeatsBar content={MovieData.l} BtnRightOnPress={() => setIsZoom(!isZoom)} />
      <View style={styles.TagList}>
        <StausIcon status={'Available'} text={'Available'} />
        <StausIcon status={'Occupied'} text={'Occupied'} />
        <StausIcon status={'Chosen'} text={'Chosen'} />
      </View>
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.ListIcon}>
        <Image
          source={require('../../assets/img/icons/Screen.png')}
          style={{ width: '100%' }}
        />
        {isZoom !== true ? renderIcon() : renderSeatsBtn()}
      </ScrollView>
      <Button
        content={'Buy tickets'}
        ContentStyle={styles.fontbtn}
        TypeTagChild={'Text'}
        style={styles.buyBtn}
        onPress={() =>
          navigation.navigate(SCREEN_NAME.PAY, {
            payName: MovieData.l
          })
        }
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModal}
        onRequestClose={() => setisModal(!isModal)}
      >
        <TouchableOpacity
          style={styles.ModalBtns}
          onPress={() => setisModal(!isModal)}
        >
          <TouchableHighlight>
            <ModalViewSelectSeat
              CurrentSeat={Seat}
              DeSelectOnPress={() => DeSelectEvent({ ...Seat, ...type })}
              arr={SelectedSeats}
              ButtonTypesOnPress={ButtonModalEvent}
              DoneOnPress={() => DoneEvent()}
            />
          </TouchableHighlight>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SelectSeat;
