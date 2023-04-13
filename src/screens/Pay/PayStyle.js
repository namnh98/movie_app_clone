import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
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
        paddingVertical:17,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default styles