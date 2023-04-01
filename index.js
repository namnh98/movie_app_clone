/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import about from './src/components/about/about';
import MoviesType from './src/components/about/MoviesType';
import DetailScreen from './src/screens/detail';
import SwitchBar from './src/components/TopBar/SwitchBar';
import Sessions from './src/components/about/Sessions';
import ContentItem from './src/components/about/ContentItem';


AppRegistry.registerComponent(appName, () => DetailScreen);
