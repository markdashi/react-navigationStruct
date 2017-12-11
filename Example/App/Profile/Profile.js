/**
 * @providesModule Profile
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import CommonListHeader from 'CommonListHeader'

export default class Profile extends Component<{}>{


    static navigationOptions = ({navigation}) => ({
        title:'账号',
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
        var item0 = new CommonListHeader.CommonListItem('33.png','我的消息','4');
            item0.customItemTipStyle = {fontSize:14,color:'white',width:13,borderRadius:6,backgroundColor:'red',overflow:'hidden'};
        var group0 = new CommonListHeader.CommonGroupItem([item0],10);
        Groups.push(group0);

    }
    _setGroupItem1(Groups){
        var item0 = new CommonListHeader.CommonListItem('33.png','会员中心');
        var item1 = new CommonListHeader.CommonListItem('33.png','商城');
        var item2 = new CommonListHeader.CommonListItem('33.png','在线听歌免流量');
        var group1 = new CommonListHeader.CommonGroupItem([item0,item1,item2],10);
        Groups.push(group1);
    }
    _setGroupItem2(Groups){
        var item0 = new CommonListHeader.CommonListItem('33.png','设置');
        var item1 = new CommonListHeader.CommonListItem('33.png','扫一扫');
        var item2 = new CommonListHeader.CommonListItem('33.png','个性换肤','官方白');
        var item3 = new CommonListHeader.CommonSwitchItem('33.png','夜间模式');
        var item4 = new CommonListHeader.CommonListItem('33.png','定时关闭');
        var item5 = new CommonListHeader.CommonListItem('33.png','音乐闹钟');
        var item6 = new CommonListHeader.CommonListItem('33.png','驾驶模式');

        var group2 = new CommonListHeader.CommonGroupItem([item0,item1,item2,item3,item4,item5,item6],10);
        Groups.push(group2);
    }

    _setGroupItem3(Groups){
        var item0 = new CommonListHeader.CommonListItem('33.png','分享网易云音乐');

        var group3 = new CommonListHeader.CommonGroupItem([item0],10);
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
                CommonRowCellStyle={{height:44}}
                SectionHeader={
                   <View style={{height:100,backgroundColor:'red',marginBottom:10}}>
                        <Text>{'测试的一个头部'}</Text>
                   </View>
                }
            />
        )
    }
    
    _sectionHeader(){
        return(
            <View style={{height:100,backgroundColor:'red',marginBottom:10}}>
                <Text>{'测试的一个头部'}</Text>
            </View>
        )
    }

}
