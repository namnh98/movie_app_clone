import { Text, View } from 'react-native'
import React from 'react'
import styles from './SwitchBarStyle'
import Button from '../Button/Button'

const SwitchBar = (props) => {
    const {mode = 'about',
    } = props
  return (
    <View style={styles.container}>
        <Button 
         TypeTagChild={'icon'}
         PatchImage={require('../../assets/img/icons/BackArrow.png')}/>
    </View>
  )
}

export default SwitchBar
