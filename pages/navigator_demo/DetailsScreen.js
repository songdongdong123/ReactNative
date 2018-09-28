import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
export default class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation }) => {
    return {
      title: navigation.getParam('text','A Nested Details Screen'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }
  }
  constructor(props){
    super(props);
    this.state={}
  }
  render () {
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    const text = navigation.getParam('text');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>DetailScreen</Text>
        <Text>id:{id}</Text>
        <Text>text:{text}</Text>
        <Text>text:{JSON.stringify(this.props.navigation.state)}</Text>
        <Button
          title="Go to Details... again"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Text>--------分割</Text>
        <Button
          title="GO to CostomerScreen"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('CostomerScreen')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  text:{
    textAlign:'center',
    color: 'pink'
  },
  button:{
    marginTop: 40
  }
})