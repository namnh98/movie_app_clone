import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  header_home: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1F293D',
    padding: 20
  },
  image_logo_home: {
    width: 60,
    height: 54
  },
  text_home: {
    color: 'white',
    fontSize: 16
  },
  text_home2: {
    color: 'white',
    fontSize: 16,
    backgroundColor: '#FF8036',
    padding: 10,

    borderRadius: 8
  },

  // navigation
  navigation: {
    backgroundColor: '#111620',
    paddingTop: 10
  },

  navi_text: {
    color: '#FFFFFF',
    fontSize: 25,
    marginLeft: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#1F293D',
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },

  search_icon: {
    backgroundColor: 'white'
  },

  bg_movie: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 10
  }
});

export default styles;
