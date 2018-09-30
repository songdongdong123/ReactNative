import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class Trending extends Component {
  static navigationOptions = {
    header:null
  };
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
        <Image style={styles.image} source={require(`../../res/images/loginbg.png`)}/>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttoncontainer}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <View style={styles.LoginButton}>
              <Text style={styles.text}>登录</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative'
  },
  LinearGradient: {
    width:width,
    height:50
  },
  image: {
    position: 'absolute',
    width:width,
    height:height
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    height:150,
    width:width,
    backgroundColor:'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    backgroundColor: '#fc3971',
    height:50
  },
  text:{
    color: '#fff',
    fontSize:15
  }
});
