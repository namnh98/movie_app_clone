import { StyleSheet} from 'react-native'
import { APP_FONTS } from '../../assets/fonts'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'rgba(26, 34, 50, 1)'
    },
    boxImage:{
        height:210,
        justifyContent:'center',
        alignItems:'center'
    },
    ImageStyle:{
        width:'100%',
    },
    containerRating:{
        flexDirection:'row',
        height:70,
        backgroundColor:'rgba(31, 41, 61, 1)'
    },
    flexItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    borderStyle:{
        borderRightWidth:1,
        borderRightColor:'rgba(109, 158, 255, 0.1)',
    },
    fontStyle:{
        color:'white',
        fontWeight:'600',
        fontSize:20
    },
    subfontStyle:{
        color:'rgba(99, 115, 148, 1)'
    },
    containerContent:{
        width:'100%',
        height:292,
        backgroundColor:'rgba(26, 34, 50, 1)',
        padding:16
    },
    Description:{
        color:'white',
        fontSize:14,
        fontWeight:'400',
        lineHeight:20
    },
    ButtonBackground:{
        width:'100%',
        height:88,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'rgba(31, 41, 61, 1)',
        padding:16
    },
    ButtonSelectSession:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(255, 128, 54, 1)',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default styles