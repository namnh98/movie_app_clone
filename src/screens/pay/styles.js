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
    marginLeft: 15
  },
  txt_bar: {
    color: 'white',
    fontSize: 18
  },
  ticket: {
    backgroundColor: '#1F293D',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 20,
    paddingRight: 20
  },
  txt_ticket: {
    color: 'white',
    fontSize: 20
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: 'rgba(109, 158, 255, 0.1)'
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
  bill: {
    marginTop: 10,
    flexDirection: 'row'
  },
  img_tear: {
    width: '100%'
  },
  tear_line: {
    backgroundColor: 'rgba(31, 41, 61, 1)',
    paddingBottom: 20
  },
  payment: {
    backgroundColor: 'rgba(31, 41, 61, 1)',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 20,
    paddingRight: 20,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(109, 158, 255, 0.1)',
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20
  },
  button: {
    backgroundColor: 'rgba(255, 128, 54, 1)',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt_button: {
    color: 'white',
    fontSize: 18
  }
});

export default styles;
