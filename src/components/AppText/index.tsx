import { Text, StyleSheet, TextStyle } from 'react-native';
import React from 'react';
import { APP_COLORS } from '@constants/colors';
import { translate as trans } from '@i18n/index';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

const selectText = createSelector(
  (state: any) => state.setting.lang,
  (_, children: any) => children,
  (_, children: any) => trans(children, { locale: _ || 'vi' })
);

interface Props {
  children?: any;
  styleText?: TextStyle;
  translate?: boolean;
}

const AppText = ({ children, styleText, translate = true, ...restInput }: Props) => {
  const lang = useSelector(state => selectText(state, children));

  return (
    <Text style={[styles.text, styleText]} allowFontScaling={false} {...restInput}>
      {translate ? lang : children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: APP_COLORS.BLACK
  }
});

export default AppText;
