import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Title from '../../components/AnNeiTitle/index';
const {width, height} = Dimensions.get('window');
export default class Trending extends Component {
  static navigationOptions = {
    header:null
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Title title={'登录'}></Title>
        <View style={styles.TextInputcontainer}>
          <View style={styles.TextInputcon}>
            <Text style={styles.text}>+86</Text>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor='#bbb'
              placeholder="请填写手机号码"
              selectionColor="#fa678e"
              underlineColorAndroid='transparent'
            ></TextInput>
          </View>
        </View>
        <View style={styles.TextInputcontainerB}>
          <View style={styles.TextInputcon}>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor='#bbb'
              placeholder="请输入6-16位密码"
              selectionColor="#fa678e"
              underlineColorAndroid='transparent'
            ></TextInput>
          </View>
        </View>
        <View style={styles.forgetpass}>
          <Text>忘记密码？</Text>
        </View>
        <TouchableOpacity style={styles.buttoncontainer}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <View style={styles.LoginButton}>
              <Text style={styles.text1
              
              
              
              }>登录</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.bottomline}>
          <Text style={styles.leftLine}></Text>
          <Text>or</Text>
          <Text style={styles.rightLine}></Text>
        </View>
        <View style={styles.wxLogin}>
          <Image style={styles.icon} source={require(`../../res/images/wechat.png`)} />
        </View>
        <View style={styles.wxLogin}>
          <Text>没有账号？立即注册</Text>
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
  TextInputcontainerB: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  TextInputcontainer:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
  },
  TextInputcon: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft:10,
    height:50
  },
  text: {
    color: '#000',
    marginRight: 5,
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#bbb',
  },
  TextInput: {
    width:300,
    height:50,
  },
  forgetpass: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'flex-end'
  },
  buttoncontainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  LoginButton: {
    backgroundColor: '#856fe2',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    color:'#fff',
    fontSize:15
  },
  bottomline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
  },
  leftLine: {
    width:150,
    borderBottomWidth:1,
    borderBottomColor: '#bbb',
  },
  rightLine: {
    width:150,
    borderBottomWidth:1,
    borderBottomColor: '#bbb',
  },
  wxLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  icon: {
    width:41,
    height:41
  }
});
