/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppBottomNavigator from './AppBottomNavigator';
import AppStackNavigator from './AppStackNavigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppBottomNavigator);
