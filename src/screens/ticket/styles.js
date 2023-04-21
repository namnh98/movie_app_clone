import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container_pay: {
    flex: 1,
    backgroundColor: '#111620'
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'rgba(31, 41, 61, 0.7)',
    height: 64
  },
  img_bar: {
    marginRight: 20
  },
  txt_bar: {
    color: 'white',
    fontSize: 18,
    marginLeft: 40
  },
  ticket: {
    backgroundColor: '#1F293D',

    paddingTop: 15,
    paddingBottom: 20
  },
  CodeQR: {
    width: '100%',
    alignItems: 'center'
  },
  txt_ticket: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 20
  },
  dt_left: {
    marginRight: 30
  },
  txt_left: {
    color: '#637394',
    fontSize: 16
  },
  txt_right: {
    fontSize: 16,
    color: 'white'
  },

  img_tear: {
    width: '100%'
  },
  tear_line: {
    backgroundColor: 'rgba(31, 41, 61, 1)',
    paddingBottom: 20,
    width: '100%'
  },
  payment: {
    backgroundColor: 'rgba(31, 41, 61, 1)',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 20,
    paddingRight: 20,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(109, 158, 255, 0.1)',
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20
  },
  button_1: {
    borderWidth: 1,
    borderColor: 'rgba(99, 115, 148, 1)',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 163,
    height: 56,
    marginRight: 20
  },
  button_2: {
    backgroundColor: 'rgba(255, 128, 54, 1)',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 163,
    height: 56
  },
  txt_button: {
    color: 'white',
    fontSize: 18
  }
});

export default styles;
