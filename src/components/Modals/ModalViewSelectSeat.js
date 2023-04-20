import React,{useState}from 'react'
import { Text, View } from 'react-native'
import styles from './ModalViewSelectSeatStyle'
import ModalViewCS from './ModalViewCS'
import Button from '../Button/Button'
import { isFound } from '../../constants/common'
const typeBoard = [
    {
      type: "Adult",
      price: "2000",
    },
    {
      type: "Child",
      price: "1000",
    },
    {
      type: "Student",
      price: "1500",
    },
];

const ModalViewSelectSeat = (props) => {
    const {
        CurrentSeat = null,
        Currenttype = null,
        DeSelectOnPress,
        DoneOnPress,
        ButtonTypesOnPress,
        arr = {},
    } = props

    const CheckHaveKey = (type) => {
        const rs = arr.find((e) => {
            return e.type === type && e.id === CurrentSeat.id
        })
        return rs
    }
    
    const RenderBtnTypes=()=>{
        return(
            <View>
               <View>
               {
                typeBoard.map((e) => {
                    
                    return <Button
                    key={e.type}
                    alotContet={true}
                    Renderchilds={RenderBtnBoxText(e.type,e.price)}
                    ContainerStyle={[styles.Button,CheckHaveKey(e.type) === e.type  ? {backgroundColor:'rgba(252, 109, 25, 1)'}:{}]}
                    onPress={() => ButtonTypesOnPress(e)}/>
                })
               }
                </View>
                <View style={styles.boxResultBtn}>
                    <Button
                        TypeTagChild={'Text'}
                        content={'DeSelect'}
                        ContainerStyle={[styles.btn,styles.btnDeSelect]}
                        ContentStyle={styles.fontTitle}
                        onPress={DeSelectOnPress}/>
                    <Button
                        TypeTagChild={'Text'}
                        content={'Done'}
                        ContainerStyle={[styles.btn,styles.btnDone]}
                        ContentStyle={styles.fontTitle}
                        onPress={DoneOnPress}/>
                </View> 
            </View>
        )
    }
    const RenderBtnBoxText =(type,price) => {
        return (
            <View style={styles.BoxTypeBtn}>
                <Text style={styles.fontTitle}>{type || ''}</Text>
                <Text style={styles.fontSubTitle}>{price + ' ₸' || ''}</Text>
            </View>
        )
    }
  return (
    <ModalViewCS
    titleContent={'Select ticket type'}
    SubContent={CurrentSeat.id || 'loi'}
    renderContent={RenderBtnTypes()}/>
  )
}

export default ModalViewSelectSeat
