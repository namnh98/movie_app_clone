import { View, Text } from 'react-native';
import React from 'react';
import SwitchBar from '../../components/TopBar/SwitchBar';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const { Movie } = useRoute().params
  return (
    <SwitchBar data={Movie} />
  );
};

export default DetailScreen;
