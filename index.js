/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SwitchBar from './src/components/TopBar/SwitchBar';
import about from './src/screens/about/about';


AppRegistry.registerComponent(appName, () => SwitchBar);
