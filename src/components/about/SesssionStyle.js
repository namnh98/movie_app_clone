import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  ControlList: {
    width: '100%',
    height: 80,
    backgroundColor: '#1F293D',
    flexDirection: 'row',
    paddingVertical: '6%',
  },
  ControlItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontStyle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 30,
  },
  SwitchBtn: {},
  Content: {
    flex: 1,
    backgroundColor: 'rgba(26, 34, 50, 1)',
  },
});

export default styles;
