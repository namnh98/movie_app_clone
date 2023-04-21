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
    alignItems: 'center',
    paddingBottom: 10
  },
  caption_1: {
    color: '#FF8036',
    fontFamily: 'PT Root UI',
    fontSize: 16
  },
  caption: {
    color: 'white',
    fontFamily: 'PT Root UI',
    fontSize: 16
  },
  video_detail: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },

  video: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  rating_row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  Item: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    color: 'white',
    fontSize: 20
  },
  txt_rating: {
    color: '#637394'
  },

  Content: {
    backgroundColor: '#1A2232'
  },
  description: {
    color: 'white',
    margin: 20,
    justifyContent: 'flex-start'
  },

  Params: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20
  },
  txt_left: {
    color: '#637394',
    fontSize: 15,
    marginRight: 15,
    marginBottom: 10
  },
  txt_right: {
    color: 'white',
    fontSize: 15,
    marginRight: 1,
    paddingRight: 100,
    marginBottom: 10
  },
  footer: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: 12,
    marginBottom: 15
  },

  Button_footer: {
    backgroundColor: '#FF8036',
    paddingLeft: 120,
    paddingRight: 120,

    paddingBottom: 10,
    borderRadius: 8
  },
  Button_footer_txt: {
    color: 'white',
    fontSize: 18,
    paddingTop: 10
  },
  //dropdown
  br_dropdown: {
    backgroundColor: '#1A2232'
  }

  //end dropdown
});

export default styles;
