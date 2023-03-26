import { Text, StyleSheet, TextStyle } from 'react-native';
import React from 'react';
import { APP_COLORS } from '@constants/colors';
import EMPTY_STRING from '@constants/common';

interface Props {
  children?: any;
  styleText?: TextStyle;
}

const AppText = ({ children, styleText, ...restInput }: Props) => {
  return (
    <Text style={[styles.text, styleText]} allowFontScaling={false} {...restInput}>
      {children || EMPTY_STRING}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: APP_COLORS.BLACK
  }
});

export default AppText;
