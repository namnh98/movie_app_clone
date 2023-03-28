import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#111620',
  },
  content:{
    paddingHorizontal:16,
    flex:1,
  },
  Header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:'4%'
  },
  title:{
    color:'#FFFFFF',
    fontWeight:'700',
    fontSize:24
  },
  BtnSeacrch:{
    paddingHorizontal:10,
    paddingVerticale:10,
    justifyContent:'center'
  },
  FlatListContainerStyle:{
    paddingVertical:'10%',
  },
});

export default styles;
