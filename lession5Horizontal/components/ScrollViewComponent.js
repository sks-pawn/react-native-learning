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
    AppRegistry,
    ViewPagerAndroid,
    View,
    Alert,
    Dimensions,
    ScrollView
} from 'react-native';

export default class ScrollViewComponent extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ViewPagerAndroid
                style={styles.container}
                initialPage={1}

                onPageScroll={event => {
                    console.log(event.nativeEvent.offset)
                }}

                onPageScrollStateChanged={event => {
                    console.log(`STATE SCROLL: ${event.nativeEvent.pageScrollState}`)
                }}

                onPageSelected={event => {
                    console.log(`PAGE: ${event.nativeEvent.position}`)
                }}
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
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
