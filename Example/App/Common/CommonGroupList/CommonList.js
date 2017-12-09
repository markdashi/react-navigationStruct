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

        //样式设置
        imageStyle:PropTypes.object,
        titleStyle:PropTypes.object,
        tipTitleStyle:PropTypes.object,
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
                data:groupItem.rowData
            })
        });
        this.state={
            sectionData:GroupsData
        }
    }


    _renderItem({item}){
        console.log(item);
        return(
           <CommonRowCell 
               rowData={item}
               {...this.props}
           />
        )
    }

    _renderSectionHeader({section}){
        console.log(section);
        return(
            <View style={{height:section.sectionHight}}>
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
            />
        )
    }
}
const styles = StyleSheet.create({



});

// switchTintColor={this.props.switchTintColor}
// didSelectedItem={this.props.didSelectedItem}
// navigation={this.props.navigation}