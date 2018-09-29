import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

class Page1 extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>page1!</Text>
      </View>
    );
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>page2!</Text>
        <Button title="打开详情页面" onPress={() => {
          this.props.navigation.navigate('Settings')
        }}></Button>
      </View>
    );
  }
}
class Page3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>page3!</Text>
      </View>
    );
  }
}

const RootStack = createBottomTabNavigator({
  Page1: Page1,
  Page2: Page2
});

export default createStackNavigator({
  HomeTab: {
    screen: RootStack,
    navigationOptions: {
      header: null,
    }
  },
  Settings: {
    screen: Page3
  }
})