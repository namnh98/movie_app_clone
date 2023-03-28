import React from 'react'
import MainRoutes from './src/routes'
import SplashScreen from 'react-native-splash-screen'
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  })
  return (
    <MainRoutes />
  )
}

export default App