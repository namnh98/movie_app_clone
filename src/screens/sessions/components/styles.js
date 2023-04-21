import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boder_list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#1A2232',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 2
  },
  group_boder_left: {
    borderRightWidth: 1,
    borderRightColor: '#253554',
    marginLeft: 20
  },
  txt_list_left_1: {
    color: 'white',
    fontSize: 20,
    marginRight: 20
  },
  txt_list_left_2: {
    color: '#637394',
    marginLeft: 16,
    marginTop: 5
  },

  group_boder_right: {
    marginRight: 40
  },

  group_list_right: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt_list_right_1: {
    color: 'white',
    fontSize: 16,
    marginRight: 20
  },
  txt_list_right_2: {
    color: '#637394',
    fontWeight: 'bold',
    fontSize: 16
  },
  //dropdown
  br_dropdown: {
    backgroundColor: '#1A2232',
    marginBottom: 2
  }

  //end dropdown
});
