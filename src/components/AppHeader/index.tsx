import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { IMG_Logo } from '@assets/images';
import AppText from '@components/AppText';
import { IC_ArrowBack, IC_Language, IC_Location } from '@assets/icons';
import { useNavigation } from '@react-navigation/core';
import AppButton from '@components/AppButton';
import EMPTY_STRING from '@constants/common';

interface HeaderProps {
  [key: string]: any;
}

const AppHeader = (props: HeaderProps) => {
  const {
    leftBack,
    leftComponent,
    title,
    titleStyle,
    logoPressHandle,
    titleRight,
    onPressRight,
    rightComponent,
    containerStyle,
    location = 'VietNam',
    language = 'VN',
    pressBack
  } = props;
  const navigation = useNavigation();

  const LeftBack = leftBack !== undefined ? leftBack : undefined;
  const LeftComponent = leftComponent !== undefined ? leftComponent : undefined;
  const Title = title !== undefined ? title : undefined;
  const TitleRight = titleRight !== undefined ? titleRight : undefined;
  const RightComponent = rightComponent !== undefined ? rightComponent : undefined;

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressLogo = () => {
    logoPressHandle?.();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {LeftComponent ? (
        <>
          <LeftComponent />
        </>
      ) : LeftBack ? (
        <AppButton
          content={() => (
            <>
              <Image source={IC_ArrowBack} style={styles.iconTint} />
            </>
          )}
          contentStyle={styles.leftButtonDefault}
          onPressButton={pressBack !== undefined ? pressBack : onPressBack}
        />
      ) : (
        <AppButton
          content={() => (
            <>
              <Image source={IMG_Logo} />
            </>
          )}
          contentStyle={styles.leftButtonDefault}
          onPressButton={onPressLogo}
        />
      )}
      {Title && <AppText styleText={titleStyle}>{Title || EMPTY_STRING}</AppText>}
      <View style={styles.rowDefault}>
        <View style={styles.rowLocation}>
          <Image source={IC_Location} />
          <AppText styleText={styles.titleCenter}>{location || EMPTY_STRING}</AppText>
        </View>
        <View style={styles.rowLanguage}>
          <Image source={IC_Language} />
          <AppText styleText={styles.titleCenter}>{language || EMPTY_STRING}</AppText>
        </View>
      </View>
      {RightComponent ? (
        <>
          <RightComponent />
        </>
      ) : (
        <AppButton
          content={TitleRight || EMPTY_STRING}
          contentStyle={styles.titleRight}
          buttonStyle={styles.buttonRight}
          onPressButton={onPressRight !== undefined ? onPressRight : () => {}}
        />
      )}
    </View>
  );
};

export default AppHeader;
