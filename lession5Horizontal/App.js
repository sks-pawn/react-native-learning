/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  ScrollView
} from 'react-native';

export default class App extends Component {
  _onPressButton = () => {
    Alert.alert("Click to button!")
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}

        onMomentumScrollBegin={() => {
          alert('Begin scrolling')
        }}

        onMomentumScrollEnd={() => {
          alert('End scrolling')
        }}
 
        onScroll={(event) => {
          let logData = `Scroll x: ${event.nativeEvent.contentOffset.x}, y: ${event.nativeEvent.contentOffset.y}`
          console.log(logData)
        }}

        scrollEventThrottle={10}
      >
        <View style={[styles.container, { width: screenWidth, backgroundColor: 'red' }]}>
          <Text style={{ color: 'white', fontSize: 30 }}>Screen 1</Text>
        </View>
        <View style={[styles.container, { width: screenWidth, backgroundColor: 'black' }]}>
          <Text style={{ color: 'white', fontSize: 30 }}>Screen 2</Text>
        </View>
        <View style={[styles.container, { width: screenWidth, backgroundColor: 'blue' }]}>
          <Text style={{ color: 'white', fontSize: 30 }}>Screen 3</Text>
        </View>
        <View style={[styles.container, { width: screenWidth, backgroundColor: 'green' }]}>
          <Text style={{ color: 'white', fontSize: 30 }}>Screen 4</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
