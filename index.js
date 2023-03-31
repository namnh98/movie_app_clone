/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import about from './src/components/about/about';
import SwitchBar from './src/components/TopBar/SwitchBar';


AppRegistry.registerComponent(appName, () => about);
