import { Text, TouchableOpacity, View ,Image, ImageBackground} from 'react-native'
import React from 'react'
import styles from './CardCarStyle'

const CardCar = (props) => {
  const {container2,...reset} = props
  return (
    <TouchableOpacity style={[styles.container,container2]} {...reset}>
      <Image
        source={require('../../assets/img/Movie/Morbius.jpg')}
        style={styles.ImageMovie}/>
        <View style={styles.boxContent}>
            <Text style={styles.title_text}>Spider-Man: No Way Home</Text>
            <Text style={styles.subTitle_text}>Action</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CardCar

