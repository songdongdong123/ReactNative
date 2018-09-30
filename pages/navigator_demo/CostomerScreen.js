import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../res/images/ic_favorite.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
export default class CostomerScreen extends React.Component {
  static navigationOptions = {
    title: 'text',
    headerTitleStyle:{flex: 1,textAlign:'center'}
  }
  constructor(props){
    super(props);
    this.state={}
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>CostomerScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text:{
    textAlign:'center',
    color: 'pink'
  }
})