import { Text, View ,Image} from 'react-native'
import React from 'react'
import styles from './TicketStyle'
const Ticket = (props) => {
    const {renderContentTop,renderContentBottom,renderTopBar} = props
  return (
    <View style={styles.container}>
      {renderTopBar || <View/>}
      <View style={styles.content1}>
        {renderContentTop || <View/>}
      </View>
      <View style={styles.backgroundLine}>
        <Image
          source={require('../../assets/img/line/LineBiill.png')}
          style={{width:'100%'}}/>
      </View>
      <View style={styles.content2}>
        {renderContentBottom || <View/>}
      </View>
    </View>
  )
}

export default Ticket
