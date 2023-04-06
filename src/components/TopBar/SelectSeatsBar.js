import { Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './SelectSeatsBarStyle'
import Button from '../Button/Button'
import { useNavigation } from '@react-navigation/native'


const SelectSeatsBar = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.TopBarContent}>
        <Button
          TypeTagChild={'icon'}
          PatchImage={require('../../assets/img/icons/BackArrow.png')}
          onPress={() => navigation.goBack()}/>
        <View style={styles.TextBox}>
          <Text style={styles.Title}>Eurasia Cinema7</Text>
          <Text style={styles.SubTitle}>The Batman</Text>
        </View>
        <Button
          TypeTagChild={'icon'}
          PatchImage={require('../../assets/img/icons/Zoom.png')}
          />
      </View>
      <View style={styles.dateAndTimeBtn}>
        <TouchableOpacity style={styles.ButtonStyle}>
          <Image
          source={require('../../assets/img/icons/Calender.png')}/>
          <Text style={styles.btnfont}>April, 14</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle}>
          <Image
          source={require('../../assets/img/icons/Clock.png')}/>
          <Text style={styles.btnfont}>15:10</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectSeatsBar
