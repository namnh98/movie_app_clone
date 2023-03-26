import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { IC_Logo } from '@assets/images';
import AppText from '@components/AppText';

interface HeaderProps {
  [key: string]: any;
}

const AppHeader = (props: HeaderProps) => {
  const { leftBack, leftComponent } = props;

  const LeftBack = leftBack !== undefined ? leftBack : undefined;
  const LeftComponent = leftComponent !== undefined ? leftComponent : undefined;

  return (
    <View style={styles.container}>
      <AppText>123</AppText>
    </View>
  );
};

export default AppHeader;
