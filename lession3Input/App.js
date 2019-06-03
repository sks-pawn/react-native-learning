/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      status: 'please type your text',
      email: '',
      password: '',
      description: ''
    }
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      this.setState(() => {
        return { status: 'keyboard is SHOW' }
      })
    })
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState(() => {
        return { status: 'keyboard is HIDE' }
      })
    })
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.status}</Text>
        <TextInput
          style={{ height: 40, width: '80%', padding: 10, borderColor: 'grey', borderWidth: 1 }}
          keyboardType='email-address'
          placeholder='Enter your email'
          placeholderTextColor='red'
          onChangeText={
            text => {
              this.setState(partialState => {
                return {
                  email: text
                }
              })
            }
          }
        />
        <TextInput
          style={{ height: 40, width: '80%', padding: 10, borderColor: 'grey', borderWidth: 1 }}
          keyboardType='default'
          placeholder='Enter your password'
          placeholderTextColor='red'
          secureTextEntry={true}
          onChangeText={
            text => {
              this.setState(partialState => {
                return {
                  password: text
                }
              })
            }
          }
        />
        <TextInput
          style={{ height: 100, width: '80%', padding: 10, borderColor: 'grey', borderWidth: 1 }}
          keyboardType='default'
          placeholder='Enter your descriptionssss'
          placeholderTextColor='red'
          multiline={true}
          borderBottomColor='green'
          borderBottomWidth={3}
          editable={true}
          autoFocus={false}
          // returnKeyLabel='search'
          // onSubmitEditing={Keyboard.dismiss}
          onChangeText={
            text => {
              this.setState(partialState => {
                return {
                  description: text
                }
              })
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
