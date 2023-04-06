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
        marginTop:'4%'
    },
    ListIcon:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        paddingHorizontal:32,
        marginTop:'30%'
    },
    paddingSeat:{
        paddingHorizontal:4,
        paddingVertical:4,
    }
})
export default styles