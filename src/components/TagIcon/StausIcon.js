import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from './Icons'
import { EMPTY_STRING } from '../../constants/common'
const StausIcon = (props) => {
    const {status,text,...reset} = props
  return (
    <View style={styles.TagItem} {...reset}>
        <Icons StatusIc={status}></Icons>
        <Text style={styles.TagFont}>{text || EMPTY_STRING}</Text>
    </View>
  )
}

export default StausIcon

const styles = StyleSheet.create({
    TagItem:{
        flexDirection:'row'
    },
    TagFont:{
        fontSize:16,
        fontWeight:'500',
        color:'white',
        marginLeft:'2%'
    }
})