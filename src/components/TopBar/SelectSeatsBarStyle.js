import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:160,
        backgroundColor:'rgba(31, 41, 61, 1)',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:'6%'
    },
    TopBarContent:{
        marginTop:'8%',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
    },
    TextBox:{
        justifyContent:'center',
        alignItems:'center'
    },
    Title:{
        color:'white',
        fontWeight:700,
        fontSize:20,
    },
    SubTitle:{
        color:'rgba(99, 115, 148, 1)',
    },
    dateAndTimeBtn:{
        height:64,
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:'6%'
    },
    ButtonStyle:{
        width:200,
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'rgba(109, 158, 255, 0.6)',
        borderRadius:6
    },
    btnfont:{
        color:'white',
        fontWeight:500,
        fontSize:16,
        marginLeft:'4%'
    }
})
export default styles
