import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  splash_screen: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 830,
    width: 420
  },
  Skip_button: {
    backgroundColor: '#FF8036',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    color: 'white',
    fontSize: 18
  },
  logo_splash: {
    width: 138,
    height: 138
  }
});

export default styles;
