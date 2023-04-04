import { StyleSheet } from 'react-native';
import { APP_COLORS } from '@constants/colors';
import { DEVICE, scale, STATUS_BAR_HEIGHT, MARGIN_TOP_HEADER } from '@constants/scale';
import { APP_FONTS } from '@assets/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.DARK_GUNMETAL,
    width: DEVICE.WIDTH,
    height: scale(50) + STATUS_BAR_HEIGHT,
    paddingTop: MARGIN_TOP_HEADER + scale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16)
  },
  leftButtonDefault: {
    backgroundColor: APP_COLORS.TRANSPARENT,
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconTint: {
    tintColor: APP_COLORS.WHITE
  },
  rowDefault: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%'
  },
  titleRight: {
    color: APP_COLORS.WHITE,
    fontFamily: APP_FONTS.BOLD,
    fontSize: scale(14),
    lineHeight: scale(20)
  },
  buttonRight: {
    backgroundColor: APP_COLORS.ORANGE_CRAYOLA,
    paddingHorizontal: scale(16),
    paddingVertical: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8)
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    JustifyContent: 'center'
  },
  rowLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
    JustifyContent: 'center'
  },
  titleCenter: {
    color: APP_COLORS.WHITE,
    fontFamily: APP_FONTS.BOLD,
    fontSize: scale(14),
    lineHeight: scale(20),
    marginLeft: scale(4)
  }
});

export default styles;
