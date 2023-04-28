import React, { useMemo } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import Button from '../../components/Button/Button';
import YourTicket from '../../components/Modals/YourTicket';
import SelectSeatsBar from '../../components/TopBar/SelectSeatsBar';
import MoviesType from '../../components/about/MoviesType';
import Ticket from '../../components/ticket/Ticket';
import styles from './PayStyle';
import { useSelector } from 'react-redux';
import { SelectedSeatSL } from '../../redux/selector';
import { useRoute } from '@react-navigation/native';


const payList = {
  Cinema: 'Eurasia Cinema7',
  Date: '6 April 2022, 14:40',
};

const Pay = () => {

  const [number, onChangeNumber] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const SelectedSeats = useSelector(SelectedSeatSL)
  const { payName } = useRoute().params

  const billsData = useMemo(() => {
    return SelectedSeats.reduce((acc, cur) => {
      return { ...acc, [`${cur.id} ${cur.type}`]: cur.price }
    }, {})
  }, [])

  const RenderBill = () => {
    return <MoviesType obj={billsData} />;
  };

  const topContent = () => {
    return (
      <React.Fragment>
        <Text style={styles.Title}>{payName || 'err'}</Text>
        <MoviesType obj={payList} />
        <View style={styles.line} />
        {RenderBill()}
      </React.Fragment>
    );
  };
  const bottomContent = () => {
    return (
      <React.Fragment>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone number"
          placeholderTextColor={'#637394'}
          keyboardType="numeric"
        />
        <Button
          TypeTagChild={'Text'}
          content={'Continue'}
          style={styles.Button}
          ContentStyle={styles.Title}
          onPress={() => setModalVisible(true)}
        />
      </React.Fragment>
    );
  };
  return (
    <>

      <Ticket
        renderTopBar={<SelectSeatsBar mode={'none_date'} />}
        renderContentTop={topContent()}
        renderContentBottom={bottomContent()}
      />
      {/* Modal purchased */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <YourTicket obj={billsData} MovieName={payName} />
      </Modal>
    </>
  );
};

export default Pay;
