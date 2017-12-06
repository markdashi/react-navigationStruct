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

export default class CommonList extends Component<{}>{

    constructor(props){
        super(props);
        this.state({

        })
    }


    _renderItem({item}){

    }

    _renderSectionHeader({section}){

    }


    render(){
        return(
            <SectionList
                renderItem={this._renderItem.bind(this)}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                data={}
                keyExtractor={(item,index) => index}
            />
        )
    }


}

