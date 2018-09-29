import React from 'react';
import {View, StyleSheet } from 'react-native';
import MyButton from '../../components/Button';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen'
  }
  constructor(props){
    super(props);
    this.state={}
  }
  render () {
    return (
      <View style={styles.container}>
        <MyButton text='页面1' 
          onPress={() => {
            this.props.navigation.navigate('Page1')
          }}
        />
        <MyButton text='页面2' 
          onPress={() => {
            this.props.navigation.navigate('Details')
          }}
        />
        <MyButton text='页面3' 
          onPress={() => {
            this.props.navigation.navigate('CostomerScreen')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  text:{
    textAlign:'center',
    color: 'pink'
  }
})