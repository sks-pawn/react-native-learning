/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Home from './components/Bottom/Home';
import Detail from './components/Bottom/Detail';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Detail: Detail
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let urlIcon;
        if (routeName === 'Home') {
          urlIcon = require(`./images/home.png`);
        } else if (routeName === 'Detail') {
          urlIcon = require(`./images/detail.png`);
        }
        return <Image style={[styles.icon, { tintColor: tintColor }]} source={urlIcon} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      labelStyle: {
        fontSize: 12,
      },
      inactiveTintColor: 'gray'
    },
  }
  // {
  //   initialRouteName: "Home",
  //   // headerMode: "none"
  // }
);

const styles = StyleSheet.create({
  icon: {
    maxWidth: 20,
    maxHeight: 20,
    backgroundColor: 'grey',
    padding: 5
  }
});


export default createAppContainer(AppNavigator);
