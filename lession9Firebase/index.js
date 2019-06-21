/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppAuthenticate from './AppAuthenticate';
import AppStorage from './AppStorage';
import AppRealtimeDatabase from './AppRealtimeDatabase'
import AppListView from './AppListView'

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppListView);
