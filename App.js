/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Platform
} from 'react-native';
import firebase from 'react-native-firebase'

export default class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.defaultPlatform}>
                <Text>Default</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    defaultPlatform: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34 : 0
    }
});
