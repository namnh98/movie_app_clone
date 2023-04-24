import { StyleSheet } from 'react-native';
import {
  scale,
  fontScale
} from 'react-native-utils-scale'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#111620',
  },
  content:{
    paddingHorizontal:scale(16),
    flex:1,
  },
  Header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:scale(6)
  },
  title:{
    color:'#FFFFFF',
    fontWeight:'700',
    fontSize:fontScale(24)
  },
  BtnSeacrch:{
    padding:scale(10),
    justifyContent:'center'
  },
  FlatListContainerStyle:{
    width:'100%',
    paddingVertical:scale(10),
  },
});

export default styles;
