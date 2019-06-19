/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import Home from './components/Stack/Home';
import Detail from './components/Stack/Detail';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail }
    },
    {
        initialRouteName: "Home",
        // headerMode: "none"
    }
);

export default createAppContainer(AppNavigator);
