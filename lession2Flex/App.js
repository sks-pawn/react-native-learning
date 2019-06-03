/**Greeting
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

class Geeting extends Component {
  render() {
    return (
      <Image source={{ uri: "https://www.w3schools.com/w3css/img_lights.jpg" }}
        style={{ width: 200, height: 200 }}></Image>
    )
  }
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <View style={[styles.topLeft1, { backgroundColor: 'red' }]}></View>
            <View style={[styles.topLeft2, { backgroundColor: 'green' }]}></View>
          </View>
          <View style={[styles.topRight, { backgroundColor: 'black' }]}>
            <Text style={styles.text}>
              Một chuỗi test
            </Text>
            {Greeting}
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={[styles.bottom1, { backgroundColor: 'blue' }]}></View>
          <View style={[styles.bottom2, { backgroundColor: 'yellow' }]}></View>
          <View style={[styles.bottom3]}>
            <View style={styles.bottom3Top}></View>
            <View style={[styles.bottom3Bottom, { backgroundColor: 'grey' }]}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Chopsic'
  },
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  top: {
    flexDirection: 'row',
    flex: 7
  },
  bottom: {
    flexDirection: 'row',
    flex: 3
  },
  topLeft: {
    flexDirection: 'column',
    flex: 3
  },
  topRight: {
    flex: 7
  },
  topLeft1: {
    flex: 2
  },
  topLeft2: {
    flex: 8
  },
  bottom1: {
    flex: 4
  },
  bottom2: {
    flex: 4
  },
  bottom3: {
    flexDirection: 'column',
    flex: 2
  },
  bottom3Top: {
    flex: 5
  },
  bottom3Bottom: {
    flex: 5
  }
});
