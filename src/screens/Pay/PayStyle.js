import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#111620',
    },
    content1:{
        backgroundColor: "#1F293D",
        paddingHorizontal:'4%',
    },
    content2:{
        backgroundColor: "#1F293D",
        paddingHorizontal:'4%',
        paddingVertical:'4%',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
    },
    Title: {
        color: "white",
        fontWeight: 700,
        fontSize: 20,
    },
    backgroundLine:{
        backgroundColor: "#1F293D",
        zIndex:1
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