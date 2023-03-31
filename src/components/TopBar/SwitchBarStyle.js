import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:160,
        paddingHorizontal:32,
        backgroundColor:'rgba(31, 41, 61, 1)',
        justifyContent:'center'
    },
    container_title:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    Button_ic:{
        position:'absolute',
        left:'2%',
    },
    Title:{
        color:'white',
        fontWeight:700,
        fontSize:20,
    },
    container_Btn:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:'36%',
        flexDirection:'row'
    },
    ButttonDefault:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonOpacityLight:{
        borderBottomWidth:4,
        borderBottomColor:'#FF8036',
    },
    ButtonOpacityDark:{
        borderBottomWidth:4,
        borderBottomColor:'#637394',
    },
    fontBtn:{
        fontSize:18,
        fontWeight:'700',
    },
    fontColorLight:{
        color:'#FF8036',
    },
    fontColorDark:{
        color:'#637394',
    }
})
export default styles;