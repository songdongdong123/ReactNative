import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

export default class Page1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar  
         animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
         hidden={false}  //是否隐藏状态栏。  
         backgroundColor={'transparent'} //状态栏的背景色  
         translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
         barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
        >  
        </StatusBar>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:60,
    backgroundColor: '#fa678e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    marginTop: 20,
    fontSize:15
  }
});
