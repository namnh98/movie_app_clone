import { Image, StyleSheet } from 'react-native';
import React from 'react';
import AppButton from '@components/AppButton';
import { scale } from '@constants/scale';
import AppText from '@components/AppText';
import EMPTY_STRING from '@constants/common';
import { APP_FONTS } from '@assets/fonts';
import { APP_COLORS } from '@constants/colors';

interface PropsMovies {
  [key: string]: any;
}

const MovieItem = (props: PropsMovies) => {
  const { data } = props;

  const goToDetail = () => {};

  return (
    <AppButton
      content={() => (
        <>
          <Image source={data?.image} style={styles.image} />
          <AppText styleText={styles.titleMain}>{data?.name || EMPTY_STRING}</AppText>
          <AppText styleText={styles.subTitle}>{data?.type || EMPTY_STRING}</AppText>
        </>
      )}
      contentStyle={styles.container}
      buttonStyle={styles.content}
      onPressButton={goToDetail}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: scale(164),
    height: scale(230),
    resizeMode: 'contain'
  },
  container: {},
  content: {
    marginHorizontal: scale(16)
  },
  titleMain: {
    fontSize: scale(16),
    fontFamily: APP_FONTS.BOLD,
    color: APP_COLORS.WHITE,
    lineHeight: scale(24)
  },
  subTitle: {
    color: APP_COLORS.DARK_BLUE_GRAY,
    fontFamily: APP_FONTS.REGULAR,
    fontSize: scale(14),
    lineHeight: scale(18)
  }
});

export default MovieItem;
