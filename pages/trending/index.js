import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

type Props = {};
export default class Trending extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
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
