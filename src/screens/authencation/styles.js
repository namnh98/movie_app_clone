import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#253554'
  },
  form_login: {
    backgroundColor: '#1F293D',
    width: 375,
    height: 226,
    borderRadius: 10,

    alignItems: 'center'
  },

  form_top: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },
  txt_login_1: {
    color: 'white',
    fontSize: 24,
    marginBottom: 5
  },

  txt_login_2: {
    color: '#637394',
    fontSize: 16,
    marginBottom: 10
  },
  form_mid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5
  },
  form_input: {
    borderWidth: 1,
    width: 80,
    height: 56,
    borderRadius: 8,
    borderColor: '#637394',
    marginBottom: 10,
    marginRight: 5
  },
  button_login: {
    backgroundColor: '#FC6D19',
    width: 343,
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
