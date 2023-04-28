import React, { memo, useState } from 'react'
import { Text, View } from 'react-native'
import styles from './ModalViewSelectSeatStyle'
import ModalViewCS from './ModalViewCS'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'
import { SelectedSeatSL } from '../../redux/selector'

const typeBoard = [
    {
        type: "Adult",
        price: "2000",
        isEnabled: false
    },
    {
        type: "Child",
        price: "1000",
        isEnabled: false
    },
    {
        type: "Student",
        price: "1500",
        isEnabled: false
    },
];

const ModalViewSelectSeat = (props) => {

    const {
        CurrentSeat,
        DeSelectOnPress,
        DoneOnPress,
        ButtonTypesOnPress,
    } = props

    const SelectedSeats = useSelector(SelectedSeatSL)
    console.log(SelectedSeats)

    const checkEnalble = (type) => {
        const isEnabled = (Element) => type.type === Element.type && CurrentSeat.id === Element.id
        const rs = SelectedSeats.some(isEnabled)
        return rs
    }

    const onPressCombine = (e) => {
        ButtonTypesOnPress(e)
    }

    const RenderBtnTypes = () => {
        return (
            <View>
                <View>
                    {
                        typeBoard.map((e) => {

                            return <Button
                                key={e.type}
                                alotContet={true}
                                Renderchilds={RenderBtnBoxText(e.type, e.price)}
                                ContainerStyle={[styles.Button, checkEnalble(e) ? { backgroundColor: 'rgba(255, 128, 54, 1)' } : {}]}
                                onPress={() => onPressCombine(e)} />
                        })
                    }
                </View>
                <View style={styles.boxResultBtn}>
                    <Button
                        TypeTagChild={'Text'}
                        content={'DeSelect'}
                        ContainerStyle={[styles.btn, styles.btnDeSelect]}
                        ContentStyle={styles.fontTitle}
                        onPress={DeSelectOnPress} />
                    <Button
                        TypeTagChild={'Text'}
                        content={'Done'}
                        ContainerStyle={[styles.btn, styles.btnDone]}
                        ContentStyle={styles.fontTitle}
                        onPress={DoneOnPress} />
                </View>
            </View>
        )
    }

    const RenderBtnBoxText = (type, price) => {
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
            renderContent={RenderBtnTypes()} />
    )
}

export default ModalViewSelectSeat
