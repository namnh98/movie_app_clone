import {Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import styles from './PayStyle'
import SelectSeatsBar from '../../components/TopBar/SelectSeatsBar'
import MoviesType from '../../components/about/MoviesType'
import Button from '../../components/Button/Button'

const payList={
  Cinema: 'Eurasia Cinema7',
  Date: '6 April 2022, 14:40',
  Hall: '6th',
  Seats:'7 row (7, 8)'
}
const Pay = () => {
  const [number,onChangeNumber] = React.useState('')
  const RenderBill = () => {

  }
  return (
    <View style={styles.container}>
      <SelectSeatsBar
      mode={'none_date'}/>
        <View style={styles.content}>
          <Text style={styles.Title}>The Batman</Text>
          <MoviesType obj={payList}/>
          <View style={styles.line}/>
          {RenderBill()}
          <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone number"
          placeholderTextColor={'#637394'}
          keyboardType="numeric"/>
          <Button
          TypeTagChild={'Text'}
          content={'Continue'}
          style={styles.Button}
          ContentStyle={styles.Title}/>
        </View>


    </View>
  )
}

export default Pay
