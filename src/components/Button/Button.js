import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Button = (props) => {
    const {
        TypeTagChild = '',
        content = null,
        ContentStyle,
        PatchImage,
        ImageStyle,
        ...reset
    } = props

    const Renderchild = () => {
        switch (TypeTagChild) {
            case 'Text':
                return <Text style={ContentStyle}>{content}</Text>
            case 'icon':
                return <Image source={PatchImage} style={ImageStyle} />
            default:
                return <View />
        }
    }
    return (
        <TouchableOpacity hitSlop={2} {...reset}>
            {Renderchild()}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({

})