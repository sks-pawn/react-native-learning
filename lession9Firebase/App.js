/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import Login from './components/Login';
import Register from './components/Register';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>

//       </View>
//     );
//   }
// }

