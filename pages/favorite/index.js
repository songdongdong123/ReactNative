import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

type Props = {};
export default class Favorite extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>这是收藏页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  }
});
