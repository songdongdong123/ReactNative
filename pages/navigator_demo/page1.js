import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
export default class page1 extends React.Component {
  static navigationOptions = {
    title: 'page1'
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>page1</Text>
        <Button title="页面跳转"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              id: 88,
              text: '你好'
            });
          }}
        ></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  text:{
    textAlign:'center',
    color: 'pink'
  }
})