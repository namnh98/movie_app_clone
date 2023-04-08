import {Text, View } from 'react-native'
import React from 'react'
import styles from './PayStyle'
import SelectSeatsBar from '../../components/TopBar/SelectSeatsBar'
const Pay = () => {
  return (
    <View style={styles.container}>
      <SelectSeatsBar
      mode={'none_date'}/>
        
    </View>
  )
}

export default Pay
