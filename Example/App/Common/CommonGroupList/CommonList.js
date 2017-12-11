/**
 *@providesModule CommonList
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity,
    Image
} from 'react-native';

import {PropTypes} from 'prop-types'

import CommonRowCell from './CommonRowCell'

export default class CommonList extends Component<{}>{

    static propTypes = {
        dataSource : PropTypes.array.isRequired,
        switchTintColor:PropTypes.string,
        didSelectedItem:PropTypes.func,
        navigation:PropTypes.object,

        //sectionHeader
        SectionHeader:PropTypes.object,


        //样式设置
        //cell样式
        CommonRowCellStyle:PropTypes.object,
        //图片样式
        imageStyle:PropTypes.object,
        //title 文字样式
        titleStyle:PropTypes.object,
        //tip 文字样式
        tipTitleStyle:PropTypes.object,
        // 尾部样式
        accessoryStyle:PropTypes.object
    };

    constructor(props){
        super(props);

        var GroupsData = [];

        var sourceData = this.props.dataSource;
        sourceData.forEach((groupItem,index) => {
            console.log(groupItem.sectionHeight)
            GroupsData.push({
                sectionHight:groupItem.sectionHeight,
                data:groupItem.rowData,
                sectionId:index
            })
        });
        this.state={
            sectionData:GroupsData
        }
    }


    _renderItem({item}){
        return(
           <CommonRowCell 
               rowData={item}
               {...this.props}
           />
        )
    }

    _renderSectionHeader({section}){

        console.log(this.props.SectionHeader)

        if (section.sectionId == 0){
            console.log('来了')
            {this.props.SectionHeader}
            // return(
            //     <View style={{height:200,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
            //         <Text>{'测试的一个头部'}</Text>
            //     </View>
            // )
        }else {
            return (
                <View style={{height:section.sectionHight}}>
                </View>
            )
        }
    }

    _renderCustom(){
        return(
            <View style={{height:200,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                <Text>{'测试的一个头部'}</Text>
            </View>
        )
    }


    render(){
        return(
            <SectionList
                renderItem={this._renderItem.bind(this)}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                sections={this.state.sectionData}
                keyExtractor={(item,index) => index}
                stickySectionHeadersEnabled={false}
                
            />
        )
    }
}
const styles = StyleSheet.create({

});
