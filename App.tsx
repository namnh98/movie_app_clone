import React from 'react';
import { APP_COLORS } from '@constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TextInput, LogBox, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainRoutes from './src/routes';

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

interface TextInputWithDefaultProps extends Text {
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
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </>
  );
};

export default App;
