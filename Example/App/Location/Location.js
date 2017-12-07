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

import CommonListItem from 'CommonListItem';
import CommonGroupItem from 'CommonGroupItem';

import CommonList from 'CommonList'

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

          this.state = {
              dataSource: Groups
          }

      }

    //组件
    componentDidMount() {

    }

    _setGroupItem0(Groups){
        var item0 = new CommonListItem('','我的','你好');
        var item1 = new CommonListItem('icon_mine_myAccount_livingCity','我的','你好');
        var item2 = new CommonListItem('icon_mine_myAccount_securityQuestion','我的','你好');
        var item3 = new CommonListItem('icon_mine_myAccount_address','我的','你好');
        var item4 = new CommonListItem('icon_mine_myAccount_address','我的','你好');

        var group0 = new CommonGroupItem([item0,item1,item2,item3,item4],0);
        Groups.push(group0);

    }
    _setGroupItem1(Groups){
        var item0 = new CommonListItem('icon_mine_myAccount_address','我的','');
        var item1 = new CommonListItem('icon_mine_myAccount_livingCity','我的','你好');
        var item2 = new CommonListItem('','我的','你好');

        var group1 = new CommonGroupItem([item0,item1,item2],50);
        Groups.push(group1);
    }



    render(){
        return(
            <CommonList dataSource={this.state.dataSource}/>
        )
    }
}
