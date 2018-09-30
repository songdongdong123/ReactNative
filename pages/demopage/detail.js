import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Detail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>文章详情文章详情文章详情文章详情文章详情文章详情文章详情文章详情</Text>
        <Text>文章详情文章详情文章详情文章详情文章详情文章详情文章详情文章详情</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 'auto'
  }
});
