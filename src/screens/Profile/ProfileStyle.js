import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(26, 34, 50, 1)',
  },
  content:{
    padding:'4%'
  },
  Button:{
    width:'100%',
    borderRadius:6,
    paddingVertical:17,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'rgba(109, 158, 255, 0.1)'
  },
  TitleBtn: {
    color: "white",
    fontWeight: 700,
    fontSize: 20,
  },
  Title: {
    color: "rgba(99, 115, 148, 1)",
    fontWeight: 700,
    fontSize: 16,
  } 
});

export default styles;
