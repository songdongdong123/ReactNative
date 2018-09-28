/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import TextComponents from './pages/nav';

// 这是判断系统的一个函数
// const instructions = Platform.select({
//   ios: '这是Ios特有的',
//   android: '这是ANDROID特有的',
// });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TextComponents></TextComponents>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
