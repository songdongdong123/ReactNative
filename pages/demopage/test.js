import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  Alert
} from 'react-native';
import Title from '../../components/Title/Title';
const {width, height} = Dimensions.get('window');

export default class Page1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.bgimg} source={require(`../../res/images/background.png`)}/>
      <StatusBar  
         animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
         hidden={false}  //是否隐藏状态栏。  
         backgroundColor={'#ff0000'} //状态栏的背景色  
         translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
         barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
        >  
        </StatusBar>
        <Title
          title={'首页'}
        ></Title>
        <ScrollView>
          <Image style={styles.image} source={require(`../../res/images/banner.png`)}/>
          <View style={styles.someresultcontainer}>
            <View style={styles.someresult}>
              <View style={styles.someresult_item}>
                <Image style={styles.someresult_icon} source={require(`../../res/images/bet.png`)} />
                <Text>投注记录</Text>
              </View>
              <View style={styles.someresult_item}>
                <Image style={styles.someresult_icon} source={require(`../../res/images/res.png`)} />
                <Text>精彩赛果</Text>
              </View>
              <View style={styles.someresult_item}>
                <Image style={styles.someresult_icon} source={require(`../../res/images/star.png`)} />
                <Text>彩票公告</Text>
              </View>
            </View>
            <View style={styles.morechoose}>
              <View style={styles.morechoose_item}>
                <Image style={styles.morechoose_icon} source={require(`../../res/images/1.png`)} />
                <Text >竞猜足球</Text>
              </View>
              <View style={styles.morechoose_item}>
                <Image style={styles.morechoose_icon} source={require(`../../res/images/6.png`)} />
                <Text >精彩篮球</Text>
              </View>
              <View style={styles.morechoose_item}>
                <Image style={styles.morechoose_icon} source={require(`../../res/images/2.png`)} />
                <Text>超级大乐透</Text>
              </View>
              <View style={styles.morechoose_item}>
                <Image style={styles.morechoose_icon} source={require(`../../res/images/3.png`)} />
                <Text>双色球</Text>
              </View>
            </View>
          </View>
          <Button
            title="侧拉"
            onPress={() => {
              this.props.navigation.openDrawer();
              Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            }}
          ></Button>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hedaer: {
    height:100,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  button:{
    marginTop: 20,
  },
  image:{
    //宽高为 null 屏幕自适应
    width:width,
    height:130
  },
  someresultcontainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  someresult: {
    width:340,
    height:60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  someresult_item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  someresult_icon: {
    width:25,
    height:25,
    marginRight:5
  },
  morechoose: {
    width:340,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    paddingTop:15,
    paddingBottom: 15,
  },
  morechoose_item: {
    justifyContent: 'center',
    alignItems: 'center',
    width:width/4,
    marginBottom: 20,
  },
  morechoose_icon: {
    width:60,
    height:60
  },
  bgimg: {
    position: 'absolute',
    width:width,
    height:height
  }
});
