import { View, Text } from 'react-native';
import React from 'react';
import styles from './ProfileStyle';
import SelectSeatsBar from '../../components/TopBar/SelectSeatsBar';
import Button from '../../components/Button/Button';
import CreditCards from '../../components/CreditCards/CreditCards';
import PayMentCard from '../../components/PayMentCard/PayMentCard';
import { ScrollView } from 'react-native';

const OnboardingScreen = () => {
  const renderCreditCard = () => {
    return <CreditCards container2={{marginVertical:'2%'}}/>
  }
  const renderPayMentCard = () => {
    return <PayMentCard container2={{marginVertical:'2%'}}/>
  }
  return (
    <View style={styles.container}>
      <SelectSeatsBar 
        mode={'non-date'}
        content={'Profile'}
        PatchImageRight={require('../../assets/img/icons/LogOut.png')}
        />
      <View style={styles.content}>
        <Text 
          style={styles.Title}>Payments history</Text>
        {renderCreditCard()}
        <Button
          TypeTagChild='Text'
          ContainerStyle={styles.Button}
          content={'Add new card'}
          ContentStyle={styles.TitleBtn}
          style={styles.Button}/>
      </View>
      <View style={styles.content}>
        <Text 
          style={styles.Title}>Savedcards</Text>
        <ScrollView>
        {renderPayMentCard()}
        </ScrollView>
      </View>
    </View>
  );
};

export default OnboardingScreen;
