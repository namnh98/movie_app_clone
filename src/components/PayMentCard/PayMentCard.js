import { Text, View ,Image} from 'react-native'
import React from 'react'
import styles from './PayMentCardStyle'

const PayMentCard = (props) => {
  const {container2} = props
  return (
    <View style={[styles.container,container2]}>
        <Image style={{width:100,height:92,borderRadius:8}} source={require('../../assets/img/Movie/BatMan.png')}/>
        <View style={styles.boxtext}>
            <Text style={styles.Title}>The Batman</Text>
            <Text style={{color:'rgba(255, 255, 255, 1)'}}>6 April 2022, 14:40</Text>
            <Text style={{color:'rgba(99, 115, 148, 1)'}}>Eurasia Cinema7</Text>
        </View>
    </View>
  )
}

export default PayMentCard
