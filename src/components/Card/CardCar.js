import { Text, TouchableOpacity, View ,Image, ImageBackground} from 'react-native'
import React from 'react'
import styles from './CardCarStyle'
import { EMPTY_STRING } from '../../constants/common'

const CardCar = (props) => {
  const {data,container2,...reset} = props
  return (
    <TouchableOpacity style={[styles.container,container2]} {...reset}>
      <Image
        source={require('../../assets/img/Movie/Morbius.jpg')}
        style={styles.ImageMovie}/>
        <View style={styles.boxContent}>
            <Text style={styles.title_text}>{data?.name || EMPTY_STRING}</Text>
            <Text style={styles.subTitle_text}>{data?.type || EMPTY_STRING}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CardCar

