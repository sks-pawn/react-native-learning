/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import { Image } from 'react-native'
import Home from './components/Home';
import Detail from './components/Detail';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

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
        return <Image source={urlIcon} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
  // {
  //   initialRouteName: "Home",
  //   // headerMode: "none"
  // }
);

export default createAppContainer(AppNavigator);
