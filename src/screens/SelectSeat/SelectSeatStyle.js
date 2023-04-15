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
        paddingTop:'8%',
        paddingBottom:'28%',
    },
    paddingSeat:{
        paddingHorizontal:4,
        paddingVertical:4,
    },
    btnSeats:{
        width:40,
        height:40,
        backgroundColor:'#253554',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    buyBtn:{
        position:'absolute',
        left:'4%',
        right:'4%',
        bottom:'4%',
        paddingVertical:17,
        backgroundColor:'#FF8036',
        borderRadius:12,
        marginTop:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    fontbtn:{
        color: "white",
        fontWeight: 700,
        fontSize: 20,
    },
    Title: {
        color: "rgba(255, 255, 255, 1)",
        fontWeight: 700,
        fontSize: 16,
    },
    subText:{
        color:'rgba(99, 115, 148, 1)'
    },
    boxTextBtn:{
        borderBottomWidth:1,
        borderBottomColor:'rgba(109, 158, 255, 0.4)',
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical:'4%'
    },
    ModalBtns:{
        flex:1,
        backgroundColor:'rgba(26, 34, 50, 0.4)',
        justifyContent:'flex-end',
        padding:'4%',
    }
})
export default styles