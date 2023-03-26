import {StyleSheet} from 'react-native'
import { APP_FONTS } from '../../assets/fonts'

const styles = StyleSheet.create({
    container:{
        position:'relative',
        width:'100%',
        height:108,
        backgroundColor:'rgba(31, 41, 61, 1)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16
    },
    flex_item1:{
        flex:1
    },
    flex_item2:{
        flex:3,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    flex_item_child:{
        flexDirection:'row',
        marginHorizontal:18
    },
    flex_item_font:{
        fontSize:16,
        fontWeight:'700',
        color:'white',
    },
    flex_item_btn:{
        backgroundColor:'#FF8036',
        width:80,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    space_item:{
        marginHorizontal:6
    }

})
export default styles