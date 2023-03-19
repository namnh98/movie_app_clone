import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);

  const openCloseModal = () => {
    setVisible((pre) => !pre);
    //mở modal
  };
  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    //đóng modal
    setVisible(false);
  };

  const renderModal = () => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#00000050',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 200,
            height: 300,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={closeModal}>
            <Text style={{ color: 'black', fontSize: 30 }}>closeModal</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal visible={visible} transparent={true}>
        {renderModal()}
      </Modal>
      <TouchableOpacity onPress={openModal}>
        <Text style={{ color: 'black', fontSize: 50 }}>Open Modal</Text>
      </TouchableOpacity>

      <Text style={{ color: 'black', fontSize: 50 }}>
        {visible ? 'true' : 'false'}
      </Text>
    </View>
  );
};

export default HomeScreen;
