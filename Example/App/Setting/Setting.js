/**
 * @providesModule Setting
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import CommonListHeader from 'CommonListHeader'


export default class Setting extends React.Component{

    static navigationOptions = ({navigation}) => ({
        title:'设置',
    });

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

          this._setGroupItem3(Groups);

          this.state = {
              dataSource: Groups,
          }
      }

    _setGroupItem0(Groups){
        var item0 = new CommonListHeader.CommonTextItem('在线播放音质','自动');
        var item1 = new CommonListHeader.CommonTextItem('下载音质','极高');
        var group0 = new CommonListHeader.CommonGroupItem([item0,item1],10);
        Groups.push(group0);

    }
    _setGroupItem1(Groups){
        var item0 = new CommonListHeader.CommonSwitchItem('','使用2G/3G/4G网络播放');
        var item1 = new CommonListHeader.CommonSwitchItem('','使用2G/3G/4G网络下载');
        var item2 = new CommonListHeader.CommonSwitchItem('','动态页中WiFi下自动播放视频');
        item2.switchIsOn = true
        var item3 = new CommonListHeader.CommonSwitchItem('','视频页中WiFi下连续播放');
        item3.switchIsOn = true
        var group1 = new CommonListHeader.CommonGroupItem([item0,item1,item2,item3],10);
        Groups.push(group1);
    }
    _setGroupItem2(Groups){
        var item0 = new CommonListHeader.CommonListItem('','账号和绑定设置');
        var item1 = new CommonListHeader.CommonListItem('','寻找并邀请好友');
        var item2 = new CommonListHeader.CommonListItem('','消息和隐私设置');
        item2.itemClick = () => {
            alert(this.state.keepState)
        }

        var group2 = new CommonListHeader.CommonGroupItem([item0,item1,item2],10);
        Groups.push(group2);
    }

    _setGroupItem3(Groups){
        var item0 = new CommonListHeader.CommonListItem('','均衡器','已关闭');
        var item1 = new CommonListHeader.CommonSwitchItem('','经典播放界面');
        var item2 = new CommonListHeader.CommonSwitchItem('','手机锁屏菜单显示"喜欢"');
        var item3 = new CommonListHeader.CommonSwitchItem('','锁屏歌词');


        var group3 = new CommonListHeader.CommonGroupItem([item0,item1,item2,item3,],10);
        Groups.push(group3);
    }

    render(){
        return(
            <CommonListHeader.CommonList
                dataSource={this.state.dataSource}
                switchTintColor={'red'}
                didSelectedItem={(value)=>{
                   // alert(value)
                }}
                tipTitleStyle={{fontSize:14,color:'#666666'}}
            />
        )
    }
}
