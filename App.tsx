import React from 'react';
import {StatusBar, View} from 'react-native'
import MainRoutes from './src/routes'

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar translucent backgroundColor={'transparent'}/>
      <MainRoutes/>
    </View>
  )
}

export default App