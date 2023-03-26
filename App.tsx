import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TextInput, LogBox, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainRoutes from './src/routes';
import { RootSiblingParent } from 'react-native-root-siblings';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import storeConfig from '@redux-app/configureStore';
import { initLanguage } from './src/i18n/index';

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false;

(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(TextInput as unknown as TextInputWithDefaultProps).defaultProps!.allowFontScaling = false;

LogBox.ignoreAllLogs();

const App = () => {
  React.useEffect(() => {
    initLanguage();
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={storeConfig.store}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <RootSiblingParent>
          <NavigationContainer>
            <MainRoutes />
          </NavigationContainer>
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};

export default App;
