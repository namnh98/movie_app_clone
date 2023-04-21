import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container_pay: {
    flex: 1,
    backgroundColor: '#111620'
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: 'rgba(31, 41, 61, 0.7)',
    height: 64
  },
  img_bar: {},
  txt_bar: {
    color: 'white',
    fontSize: 18
  },
  section: {
    margin: 20
  },
  txt_section: {
    color: 'rgba(99, 115, 148, 1)',
    fontSize: 18,
    marginBottom: 10
  },
  card: {
    backgroundColor: 'rgba(31, 41, 61, 1)',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15
  },
  visa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_visa: {
    marginRight: 15
  },
  txt_visa: {
    fontSize: 15,
    color: 'white'
  },
  exp_txt: {
    fontSize: 15,
    color: 'rgba(99, 115, 148, 1)'
  },
  button_add: {
    borderWidth: 1,
    borderColor: 'rgba(109, 158, 255, 0.1)',
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20
  },
  txt_add: {
    fontSize: 16,
    color: 'white',
    fontWeight: 700
  },
  section_pay: {
    justifyContent: 'center',
    width: '100%'
  },
  txt_scpay: {
    color: 'rgba(99, 115, 148, 1)',
    fontSize: 16,
    marginLeft: 20
  },
  payments: {
    backgroundColor: 'rgba(31, 41, 61, 1)',
    margin: 20,
    borderRadius: 8,
    flexDirection: 'row',

    alignItems: 'center',
    padding: 10
  },
  title: {
    marginLeft: 20
  },
  txt_title_1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700
  },
  txt_title_2: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: 400
  },
  txt_title_3: {
    color: 'rgba(99, 115, 148, 1)',
    fontSize: 18
  }
});

export default styles;
