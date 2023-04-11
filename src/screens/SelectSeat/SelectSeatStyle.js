import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(26, 34, 50, 1)',
    },
    TagList:{
        width:'100%',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-around',
        marginTop:'4%',
        paddingVertical:'4%'
    },
    ListIcon:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        paddingHorizontal:32,
        paddingVertical:'8%',
    },
    paddingSeat:{
        paddingHorizontal:4,
        paddingVertical:4,
    },
    buyBtn:{
        width:343,
        paddingHorizontal:82,
        paddingVertical:17,
        backgroundColor:'#FF8036',
        alignSelf:'center',
        borderRadius:12,
        marginTop:'30%'
    },
    btnSeats:{
        width:40,
        height:40,
        backgroundColor:'#253554',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    }
})
export default styles