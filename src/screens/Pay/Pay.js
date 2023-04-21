import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Image, Modal, Text, TextInput, View } from 'react-native';
import Button from '../../components/Button/Button';
import YourTicket from '../../components/Modals/YourTicket';
import SelectSeatsBar from '../../components/TopBar/SelectSeatsBar';
import MoviesType from '../../components/about/MoviesType';
import Ticket from '../../components/ticket/Ticket';
import styles from './PayStyle';

const payList = {
  Cinema: 'Eurasia Cinema7',
  Date: '6 April 2022, 14:40',
  Hall: '6th',
  Seats: '7 row (7, 8)',
};
const bills = {
  '1 x Adult': '2200 ₸',
  '1 x Child': '2200 ₸',
  '2 total': '3200 ₸',
};
const Pay = () => {
  const [number, onChangeNumber] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const { data } = useRoute()?.params;

  const billsData = useMemo(() => {
    data.forEach((e) => {
      return (billsData[`${e.id} Type: ${e.type}`] = `${e.price} ₸`);
    });
  }, []);

  const RenderBill = () => {
    return <MoviesType obj={billsData} />;
  };

  const topContent = () => {
    return (
      <React.Fragment>
        <Text style={styles.Title}>The Batman</Text>
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
    <React.Fragment>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <YourTicket />
      </Modal>
      <Ticket
        renderTopBar={<SelectSeatsBar mode={'none_date'} />}
        renderContentTop={topContent()}
        renderContentBottom={bottomContent()}
      />
    </React.Fragment>
  );
};

export default Pay;
