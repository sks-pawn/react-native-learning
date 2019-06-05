/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView
} from 'react-native';

export default class App extends Component {
  _onPressButton = () => {
    Alert.alert("Click to button!")
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <ScrollView >
        <View style={styles.container}>


          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor='red'
            onShowUnderlay={() => {
              alert("on show TouchableHighlight button!")
            }}
          >
            <View style={{ backgroundColor: 'black' }}>
              <Image
                style={{ width: 100, height: 30 }}
                source={require('./images/image_button.png')} />
            </View>
          </TouchableHighlight>

          <TouchableNativeFeedback
            onPress={this._onPressButton}
            useForeground={false}
          >
            <View style={{ width: 300, height: 50, backgroundColor: 'blue' }}>
              <Text style={{ margin: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
                TouchableNativeFeedback
            </Text>
            </View>
          </TouchableNativeFeedback>


          <TouchableOpacity
            onPress={this._onPressButton}
            useForeground={false}
            activeOpacity={0.7}
          >
            <View style={{ width: 300, height: 50, backgroundColor: 'red' }}>
              <Text style={{ margin: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
                TouchableOpacity
            </Text>
            </View>
          </TouchableOpacity>

          <TouchableWithoutFeedback
            onPress={this._onPressButton}
            onPressIn={() => {
              alert('onPress In')
            }}
            onPressOut={() => {
              alert('onPress Out')
            }}
          >
            <View style={{ width: 300, height: 50, backgroundColor: 'purple' }}>
              <Text style={{ margin: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
                TouchableWithoutFeedback
            </Text>
            </View>
          </TouchableWithoutFeedback>

          <Image
            style={{ width: screenWidth, height: screenWidth * 3420 / 5526 }}
            source={require('./images/image_size_big.jpg')} />
          <Image
            style={{ width: screenWidth, height: screenWidth * 3420 / 5526 }}
            source={require('./images/image_size_big.jpg')} />
          <Image
            style={{ width: screenWidth, height: screenWidth * 3420 / 5526 }}
            source={require('./images/image_size_big.jpg')} />
          <Image
            style={{ width: screenWidth, height: screenWidth * 3420 / 5526 }}
            source={require('./images/image_size_big.jpg')} />
          <Image
            style={{ width: screenWidth, height: screenWidth * 3420 / 5526 }}
            source={require('./images/image_size_big.jpg')} />
          <Image
            style={{ width: screenWidth, height: screenWidth * 3420 / 5526 }}
            source={require('./images/image_size_big.jpg')} />
        </View>
      </ScrollView>
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
