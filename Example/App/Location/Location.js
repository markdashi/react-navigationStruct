/**
 * @providesModule Location
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import CommonListHeader from 'CommonListHeader'



export default class Location extends React.Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态

          var Groups = [];
          //设置数据源
          //面向对象开发
          //面向属性开发
          //第一组
          this._setGroupItem0(Groups);
          //第二组
          this._setGroupItem1(Groups);

          this._setGroupItem2(Groups);

          this.state = {
              dataSource: Groups
          }
      }

    //组件
    componentDidMount() {

    }

    _setGroupItem0(Groups){
        var item0 = new CommonListHeader.CommonListItem('','我的','20');
        var item1 = new CommonListHeader.CommonListItem('icon_mine_myAccount_livingCity','我的','20',true);
        var item2 = new CommonListHeader.CommonListItem('icon_mine_myAccount_securityQuestion','我的','20',true);
        var item3 = new CommonListHeader.CommonListItem('icon_mine_myAccount_address','我的','20');
        item3.routeScreen = {
            screen:'Discover'
        };
        var item4 = new CommonListHeader.CommonListItem('icon_mine_myAccount_address','我的','20');
        item4.routeScreen = {
            screen:'Detail'
        };

        var group0 = new CommonListHeader.CommonGroupItem([item0,item1,item2,item3,item4],10);
        Groups.push(group0);

    }
    _setGroupItem1(Groups){
        var item0 = new CommonListHeader.CommonListItem('icon_mine_myAccount_address','我的','');
        var item1 = new CommonListHeader.CommonListItem('icon_mine_myAccount_livingCity','我的','20');
        var item2 = new CommonListHeader.CommonListItem('','我的','');
        item2.itemClick = (()=>{
            this.props.navigation.navigate('Detail');
        });

        var group1 = new CommonListHeader.CommonGroupItem([item0,item1,item2],20);
        Groups.push(group1);
    }
    _setGroupItem2(Groups){
        var item0 = new CommonListHeader.CommonListItem('icon_mine_myAccount_address','我的','');
        var item1 = new CommonListHeader.CommonListItem('icon_mine_myAccount_livingCity','我的','20');
        var item2 = new CommonListHeader.CommonListItem('','我的','');
        var item3 = new CommonListHeader.CommonListSwitch('icon_mine_myAccount_address','我的','20');
        var item4 = new CommonListHeader.CommonListSwitch('','我的');
        item4.switchOnvalueChange=function (value) {
            alert(value)
        }
        var item5 = new CommonListHeader.CommonListSwitch('','哈哈哈');
        var group2 = new CommonListHeader.CommonGroupItem([item0,item1,item2,item3,item4,item5],20);
        Groups.push(group2);
    }
    

    render(){
        return(
            <CommonListHeader.CommonList
                dataSource={this.state.dataSource}
                switchTintColor={'red'}
                didSelectedItem={(value)=>{
                   // alert(value)
                }}
                navigation={this.props.navigation}
                imageStyle={{}}
                titleStyle={{}}
                tipTitleStyle={{}}
                accessoryStyle={{}}
            />
        )
    }
}
// 设置原点
//width: 15,backgroundColor:'red',borderRadius: 6,overflow: 'hidden'