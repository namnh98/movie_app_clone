import { APP_COLORS } from '@constants/colors';
import { scale } from '@constants/scale';
import { StyleSheet } from 'react-native';
import { APP_FONTS } from '../../assets/fonts/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.DARK_GUNMETAL
  },
  bodyContainer: {
    flex: 1,
    marginTop: scale(16)
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16)
  },
  titleTopSection: {
    color: APP_COLORS.WHITE,
    fontSize: scale(20),
    fontFamily: APP_FONTS.BOLD
  },
  list: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(8),
    paddingBottom: scale(24)
  },
  seperator: {
    height: scale(16)
  }
});

export default styles;
