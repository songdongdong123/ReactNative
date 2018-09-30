import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Title from '../../components/Title/Title';
export default class Trending extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Title
          title={'首页'}
        ></Title>
        <Text>这是趋势页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81d8d0',
  }
});
