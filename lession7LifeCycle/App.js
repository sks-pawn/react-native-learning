/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('This is constructor')
    this.state = {
      numOfRefresh: 0
    }
    setInterval(() => {
      console.log('------------------------------------------------ ')
      this.setState({
        numOfRefresh: this.state.numOfRefresh + 1
      })
    }, 2000)
  }

  componentWillMount() {
    console.log('This is componentWillMount')
  }

  componentDidMount() {
    console.log('This is componentDidMount')
  }


  // render lại hàm
  shouldComponentUpdate() {
    console.log('This is shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('This is componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('This is componentDidUpdate')
  }

  render() {
    console.log('This is render')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! {this.state.numOfRefresh}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
