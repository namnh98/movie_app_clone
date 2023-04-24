import React from 'react'
import MainRoutes from './src/routes'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  })
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  )
}

export default App