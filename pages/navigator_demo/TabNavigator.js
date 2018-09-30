import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

class Page1 extends React.Component {
  render() {
    return (
      <View>
        <Text>page1!</Text>
      </View>
    );
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <View>
        <Text>page2!</Text>
        <Button title="打开详情页面" onPress={() => {
          this.props.navigation.navigate('Settings')
        }}></Button>
      </View>
    );
  }
}
class Page3 extends React.Component {
  static navigationOptions = ({navigation}) =>({
    title: 'text',
    headerTitleStyle:{alignSelf:'center'},
  });
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>page3!</Text>
      </View>
    );
  }
}

const RootStack = createBottomTabNavigator({
  Page1: {
    screen: Page1
  },
  Page2: {
    screen: Page2
  }
}, {
  initialRouteName: 'Page2',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: {
      backgroundColor: 'blue'
    },
  }
});

export default createStackNavigator({
  HomeTab: {
    screen: RootStack,
  },
  Settings: {
    screen: Page3
  },
}, {
  mode: 'card'
})