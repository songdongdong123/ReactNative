import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList
} from 'react-native';
import Title from '../../components/Title/Title';

export default class Page1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title
          title={'收藏'}
        ></Title>
        <SectionList
        renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
        sections={[
          { title: "Title1", data: ["item1", "item2"] },
          { title: "Title2", data: ["item3", "item4"] },
          { title: "Title3", data: ["item5", "item6"] }
        ]}
        keyExtractor={(item, index) => item + index}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
