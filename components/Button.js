import React from 'react';
import {View,Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

export default class MyButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
  }
  constructor(props){
    super(props);
    this.state = {};
  }
  render () {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {this.props.onPress()}} >
          {this.props.text}
          </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'pink',
    marginTop: 20,
    height:50,
    width:300
  },
  text:{
    fontSize:14,
    textAlign:'center',
    lineHeight: 50
  }
})