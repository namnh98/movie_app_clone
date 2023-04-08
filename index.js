/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SelectSeatsBar from './src/components/TopBar/SelectSeatsBar';
import CheckBox from './src/components/CheckBox/CheckBox';
import Icons from './src/components/TagIcon/Icons';
import Pay from './src/screens/Pay/Pay';


AppRegistry.registerComponent(appName, () => App);
