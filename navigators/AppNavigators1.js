import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import homepage from '../pages/demopage/homepage';
import Page1 from '../pages/demopage/page1';
import Page2 from '../pages/demopage/page2';
import Page3 from '../pages/demopage/page3';
import Detail from '../pages/demopage/detail';
import Start from '../pages/Start/Start.js';
import Login from '../pages/Login/index';

const AppStackNavigator = createBottomTabNavigator({
  Home: {
    screen: homepage,
    navigationOptions: {
      title: '购彩'
    }
  },
  Settings: {
    screen: Page1,
    navigationOptions: {
      title: '充值'
    }
  },
  Me: {
    screen: Page2,
    navigationOptions: {
      title: '我的'
    }
  }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ic_polular`;
      } else if (routeName === 'Settings') {
        iconName = `ic_trending`;
      } else {
        iconName = `ic_favorite`;
      }
      switch (iconName) {
        case 'ic_polular':
          return <Image style={[styles.navIcon,{tintColor:tintColor}]} source={require(`../res/images/defaultlottery.png`)} />
          break;
        case 'ic_trending':
          return <Image style={[styles.navIcon,{tintColor:tintColor}]} source={require(`../res/images/defaulttrophy.png`)} />
          break;
        case 'ic_favorite':
          return <Image style={[styles.navIcon,{tintColor:tintColor}]} source={require(`../res/images/defaultme.png`)} />
          break;
        default:
          return null
      }
    }
  }),
  tabBarOptions: {
    activeTintColor: '#ff0000',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 12,
      alignItems: 'center'
    },
    style: {
      backgroundColor: '#fff',
    }
  }
})
const MyApp = createDrawerNavigator({
  Page3: {
    screen: Page3,
  }
});
export const HomeStack = createStackNavigator({
  Home: {
    screen: AppStackNavigator,
    navigationOptions: {
      header:null
    }
  },
  Detail: Detail,
  Start: Start,
  Login: Login
}, {
  initialRouteName: 'Start'
});

const styles = StyleSheet.create({
  navIcon:{
    width:22,
    height:22
  }
});