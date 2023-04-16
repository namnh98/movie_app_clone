import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from './CreditCardsStyle';

const CreditCards = (props) => {
  const { container2 } = props;

  return (
    <View style={[styles.container, container2]}>
      <Image source={require('../../assets/img/icons/CreditCard1.png')} />
      <View style={{ flex: 4 }}>
        <Text style={styles.Title}>4716 •••• •••• 5615</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.SubTitle}>06/24</Text>
      </View>
    </View>
  );
};

export default CreditCards;
