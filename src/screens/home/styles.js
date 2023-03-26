import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(31, 41, 61, 1)',
    paddingBottom:'36%'
  },
  content:{
    paddingHorizontal:16
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
  CardCarList:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  ListContainer:{
    height:'100%'
  }

});

export default styles;
