/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation'

import Discover from 'Discover';
import Home from 'Home';
import Location from 'Location';
import Detail from 'Detail';
import Profile from 'Profile'

import Setting from 'Setting'
/**
 * 实现底部 TabBar
 */
const MainTabPage = TabNavigator(
    {
      Home:{
        screen:Home,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'首页',
          tabBarIcon: ({ focused, tintColor}) => (
              <Icon name="ios-disc-outline" size={30} color={tintColor} />
          )
        })
      },
      Discover: {
        screen:Discover,
        navigationOptions:() => ({
          tabBarLabel:'发现',
          tabBarIcon: ({focused,tintColor}) => (
              <Icon name="ios-musical-notes-outline" size={30} color={tintColor} />
          )
        })
      },
      Location:{
        screen:Location,
        navigationOptions:() => ({
          tabBarLabel:'定位',
          tabBarIcon:({focused, tintColor}) => (
              <Icon name="ios-add-circle" size={30} color={tintColor} />
          )
        })
      },
      Profile:{
        screen:Profile,
        navigationOptions:() => ({
          tabBarLabel:'我的',
          tabBarIcon:({focused, tintColor}) => (
              <Icon name="ios-flower" size={30} color={tintColor} />
          )
        })
      }
    },
    {
      tabBarComponent: TabBarBottom,
      animationEnabled: false,
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      backBehavior: 'none',
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'lightgray',
        showIcon: true,
        upperCaseLabel: false,
        indicatorStyle: {
          height: 0,
        },
        style: {
          backgroundColor: '#e8e8e8',
          height:49,
        },
      }
});
/*
 * 实现跳转的栈
 * */
const App = StackNavigator({
  MainTabPage: {screen:MainTabPage},
  Discover: {screen:Discover},
  Home:{screen:Home},
  Location:{screen:Location},
  Detail:{screen:Detail},
  Setting:{screen:Setting},
  Profile:{screen:Profile}
},{
  navigationOptions: {
    gesturesEnabled: true,
    headerBackTitle: '返回',
    headerTintColor:'#333333'
  },
});
export default App;