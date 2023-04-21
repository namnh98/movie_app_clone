import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F293D',
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 32,
    marginTop: 10
  },
  txt_header: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt_top: {
    color: 'white',
    fontSize: 18
  },
  txt_bottom: {
    color: '#637394',
    fontSize: 14
  },

  Date_Time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  Date: {
    borderWidth: 1,
    borderColor: '#637394',
    borderRadius: 8,
    width: 163,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  Time: {
    borderWidth: 1,
    borderColor: '#637394',
    borderRadius: 8,
    width: 163,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt_date: {
    color: 'white',
    fontSize: 16
  },
  //seat map
  seat_map: {
    flex: 1,
    backgroundColor: '#1A2232',
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },

  screens: {
    marginTop: 150
  },

  ImageIconStyle: {
    marginTop: 0
  },
  symbols: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    alignItems: 'center',
    marginTop: 15
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  available: {
    color: 'white',
    fontSize: 15
  },
  seat: {
    borderWidth: 0,
    width: 16,
    height: 16,
    borderRadius: 12,
    marginRight: 5,
    backgroundColor: '#1F293D'
  },
  seat_list: {
    borderWidth: 0,
    width: 32,
    height: 32,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#253554',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list_row: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 12
  },
  txt_seat: {
    color: 'white'
  },
  button: {
    borderWidth: 1,
    width: 343,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#FC6D19',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  txt_button: {
    color: 'white',
    fontSize: 18
  }

  //end seat map
});

export default styles;
