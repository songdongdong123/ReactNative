import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

type Props = {};
export default class Me extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>这个是个人中心页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  }
});
