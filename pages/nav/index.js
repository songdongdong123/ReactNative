import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Hot  from '../hot/index';
import Trending from '../trending/index';
import Favorite from '../favorite/index';
import Me from '../me/index';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'tb_polular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_polular'}
            title="最热"
            selectedTitleStyle={{color:'#36c'}}
            renderIcon={() => <Image style={styles.navIcon} source={require('../../res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.navIcon,{tintColor:'#36c'}]} source={require('../../res/images/ic_polular.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_polular' })}>
            <Hot></Hot>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            selectedTitleStyle={{color:'#36c'}}
            renderIcon={() => <Image style={styles.navIcon} source={require('../../res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.navIcon,{tintColor:'#36c'}]} source={require('../../res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <Trending></Trending>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            title="收藏"
            selectedTitleStyle={{color:'#36c'}}
            renderIcon={() => <Image style={styles.navIcon} source={require('../../res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.navIcon,{tintColor:'#36c'}]} source={require('../../res/images/ic_favorite.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <Favorite></Favorite>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="我的"
            selectedTitleStyle={{color:'#36c'}}
            renderIcon={() => <Image style={styles.navIcon} source={require('../../res/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.navIcon,{tintColor:'#36c'}]} source={require('../../res/images/ic_my.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <Me></Me>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'red'
  },
  page2:{
    flex:1,
    backgroundColor:'blue'
  },
  navIcon:{
    width:22,
    height:22
  }
});
