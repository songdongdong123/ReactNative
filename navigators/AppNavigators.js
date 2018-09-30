import React, { Component } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import homepage from '../pages/demopage/homepage';
import Page1 from '../pages/demopage/page1';
import Page2 from '../pages/demopage/page2';
import Page3 from '../pages/demopage/page3';
import Detail from '../pages/demopage/detail';

const HomeStack = createStackNavigator({
  Home: homepage,
  Detail: Detail,
});

const SettingsStack = createStackNavigator({
  Settings: Page2
});
const Me = createStackNavigator({
  Me: Page3
});
export const AppStackNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: '首页'
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      title: '收藏'
    }
  },
  Me: {
    screen: Me,
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
          return <Image style={[styles.navIcon,{tintColor:tintColor}]} source={require(`../res/images/ic_polular.png`)} />
          break;
        case 'ic_trending':
          return <Image style={[styles.navIcon,{tintColor:tintColor}]} source={require(`../res/images/ic_trending.png`)} />
          break;
        case 'ic_favorite':
          return <Image style={[styles.navIcon,{tintColor:tintColor}]} source={require(`../res/images/ic_favorite.png`)} />
          break;
        default:
          return null
      }
    }
  }),
  tabBarOptions: {
    activeTintColor: '#6495ED',
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

const styles = StyleSheet.create({
  navIcon:{
    width:22,
    height:22
  }
});