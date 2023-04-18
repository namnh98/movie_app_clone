import { StyleSheet } from 'react-native'
import { APP_FONTS } from '../../assets/fonts'


const styles = StyleSheet.create({
    Button: {
        paddingVertical:'4%',
        borderBottomWidth:1,
        borderBottomColor:'rgba(99, 115, 148, 1)'
    },
    BoxTypeBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fontTitle:{
        fontFamily: APP_FONTS.SEMI_BOLD,
        color:'white',
        fontSize:16
    },
    fontSubTitle:{
        color:'rgba(99, 115, 148, 1)'
    },
    boxResultBtn:{
        width:'100%',
        height:'26%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'2%'
    },
    btn:{
        width:'33.33333%',
        padding:18,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    btnDone:{
        backgroundColor:'rgba(255, 128, 54, 1)',
    },
    btnDeSelect:{
        borderWidth:1,
        borderColor:'rgba(99, 115, 148, 1)'
    }
})
export default styles