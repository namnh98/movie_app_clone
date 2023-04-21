import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F293D'
  },
  header_detail: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ImageIconStyle: {
    fontSize: 30
  },
  txt_detail: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'PT Root UI'
  },

  tabs_detail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  caption: {
    color: 'white',
    fontFamily: 'PT Root UI',
    fontSize: 16
  },
  caption_2: {
    color: '#FF8036',
    fontFamily: 'PT Root UI',
    fontSize: 16
  },

  // session
  Sessions: {
    marginTop: 20
  },
  header_session: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  ss_calender: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt_calender: {
    color: 'white',
    fontSize: 16,
    marginTop: 10
  },
  txt_switch: {
    color: 'white',
    fontSize: 16
  },

  header_ss_2: {
    backgroundColor: '#253554',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 10
  },

  session_group: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  txt_time: {
    marginLeft: 25,
    marginRight: 25,
    fontSize: 15,
    color: '#637394'
  },
  txt_group: {
    marginRight: 30,
    fontSize: 15,
    color: '#637394'
  },

  //container_list
  container_list: {
    backgroundColor: '#253554'
  },

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
  }

  //end container_list

  // end session
});

export default styles;
