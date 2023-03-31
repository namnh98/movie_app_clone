import { Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './SwitchBarStyle'
import Button from '../Button/Button'
import { TabView } from 'react-native-tab-view'

const SwitchBar = (props) => {
  const { mode = 'about',
  } = props

  let [TabViewIndex, setTabViewIndex] = useState(0);

  const [routes] = useState([
    {
      key: 'fist',
      title: 'About'
    },
    {
      key: 'second',
      title: 'Sessions'
    },
    {
      key: 'second',
      title: 'Sessions'
    }
  ])
  const ButtonActive = {
    btnStyle: [styles.ButttonDefault, styles.ButtonOpacityLight],
    fontStyle: [styles.fontColorLight, styles.fontBtn],
  }
  const ButtonUnActive = {
    btnStyle: [styles.ButttonDefault, styles.ButtonOpacityDark],
    fontStyle: [styles.fontColorDark, styles.fontBtn],
  }
  const renderSwicthButtons = () => {
    const html = routes.map((e, i) => {
      return <Button
        TypeTagChild={'Text'}
        style={TabViewIndex === i ? ButtonActive.btnStyle : ButtonUnActive.btnStyle}
        content={e.title}
        ContentStyle={TabViewIndex === i ? ButtonActive.fontStyle : ButtonUnActive.fontStyle}
        onPress={() => TabViewIndex !== i ? setTabViewIndex(i) : setTabViewIndex(TabViewIndex)} />
    })
    return html
  }
  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Button
          TypeTagChild={'icon'}
          PatchImage={require('../../assets/img/icons/BackArrow.png')}
          style={styles.Button_ic} />
        <Text style={styles.Title}>The Batman</Text>
      </View>
      <View style={styles.container_Btn}>
        {renderSwicthButtons()}
      </View>
    </View>
  )
}

export default SwitchBar
