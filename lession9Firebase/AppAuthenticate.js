/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import Login from './components/Authenticate/Login';
import Register from './components/Authenticate/Register';
import GoWelcome from './components/Authenticate/GoWelcome';


import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    GoWelcome: GoWelcome
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);