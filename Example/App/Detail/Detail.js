/**
 * @providesModule Detail
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Detail extends React.Component{

    static navigationOptions = ({navigation}) => ({
        title:'详情界面'
    })


    render(){
        return(
            <View style={{flex:1}}>
                <Text>{'Detail'}</Text>
                <Text onPress={()=>{
                     this.props.navigation.goBack()
                }}>{'点击我我就要返回了'}</Text>
            </View>
        )
    }
}
