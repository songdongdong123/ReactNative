import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Title from '../../components/Title/Title';
export default class Page3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title
          title={'page2'}
        ></Title>
        <Text>page3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
