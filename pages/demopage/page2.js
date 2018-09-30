import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import Title from '../../components/Title/Title';

export default class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title
          title={'我的'}
        ></Title>
        <ScrollView>
          <Text style={styles.text}>page2</Text>
          <Text style={styles.text}>page2</Text>
          <Text style={styles.text}>page2</Text>
          <Text style={styles.text}>page2</Text>
          <Text style={styles.text}>page2</Text>
          <Text style={styles.text}>page2</Text>
          <Text style={styles.text}>page2</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    height:200,
    marginBottom:20
  }
});
