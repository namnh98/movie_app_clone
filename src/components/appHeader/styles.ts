import { StyleSheet } from 'react-native';
import { APP_COLORS } from '@constants/colors';
import { DEVICE, scale, STATUS_BAR_HEIGHT } from '@constants/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.DARK_GUNMETAL,
    width: DEVICE.WIDTH,
    height: scale(50) + STATUS_BAR_HEIGHT
  }
});

export default styles;
