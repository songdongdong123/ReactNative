import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

type Props = {};
export default class Hot extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>这是推荐页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  }
});
