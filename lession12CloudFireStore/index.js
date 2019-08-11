/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Todos from './pages/Todos';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Todos);
