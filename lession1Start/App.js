/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from './src/components';
import { Styles } from './src/common'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isActive : true
    }
  }
  render() {
    const { isActive } = this.state
    return (
      <View>
        <Avatar width={50} height={50} borderRadius={50 / 2} backgroundColor={'red'} />
        <View style={Styles.rectangle}></View>
        <View style={[
          stylesInside.rectangle,
          { height: 100 },
          isActive ? {
            backgroundColor: 'green'
          } :
            { backgroundColor: 'red' }
        ]}></View>
      </View>
    )
  }
}

const stylesInside = StyleSheet.create({
  rectangle: {
    width: 200
  }
});