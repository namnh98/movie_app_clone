import { Text, View ,Image} from 'react-native'
import React from 'react'
import styles from './SelectSeatStyle'
import SelectSeatsBar from '../../components/TopBar/SelectSeatsBar'
import Icons from '../../components/TagIcon/Icons'
import StausIcon from '../../components/TagIcon/StausIcon'
const SelectSeat = () => {
    const renderIcon = () => {
        let totalSeats = [];
        
        for(let i=0;i<154;i++){
            totalSeats.push(i+1)
        }
        let rs=totalSeats.map((e,i) => {
            return <View 
            key={i}
            style={styles.paddingSeat}>
                <Icons StatusIc={'Available'}/>
        </View>
        })
        return rs
    }
  return (
    <View style={styles.container}>
      <SelectSeatsBar/>
      <View style={styles.TagList}>
        <StausIcon status={'Available'} text={'Available'}/>
        <StausIcon status={'Occupied'} text={'Occupied'}/>
        <StausIcon status={'Chosen'} text={'Chosen'}/>
      </View>
      <View style={styles.ListIcon}>
        <Image 
            source={require('../../assets/img/icons/Screen.png')} 
            style={{width:'100%'}}/>
            {renderIcon()}
      </View>
    </View>
  )
}

export default SelectSeat
