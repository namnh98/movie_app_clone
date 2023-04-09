import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#111620',
    },
    content:{
        backgroundColor:'rgba(31, 41, 61, 1)',
        padding:16,
        borderBottomRightRadius:14,
        borderBottomLeftRadius:14,
    },
    Title: {
        color: "white",
        fontWeight: 700,
        fontSize: 20,
    },
    line:{
        width:'100%',
        borderWidth:1,
        borderColor:'rgba(109, 158, 255, 0.1)'
    },
    input:{
        width:'100%',
        padding:16,
        borderWidth:1,
        borderColor:'rgba(109, 158, 255, 0.1)',
        borderRadius:8,
        color:'white',
        marginBottom:'2%'
    },
    Button:{
        width:'100%',
        backgroundColor:'rgba(255, 128, 54, 1)',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:18
    },
    img:{
        position:'absolute',
        left:0,
        right:0,
    }
})
export default styles