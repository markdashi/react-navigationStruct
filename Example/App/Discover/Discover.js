/**
 * @providesModule Discover
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Discover extends React.Component{
    
    render(){
        return(
            <View style={{flex:1}}>
                <Text>{'Discover'}</Text>
                <Text onPress={()=>{
                       console.log(this.props)
                       this.props.navigation.navigate('Detail')
                }}>{'点击我就要跳转了'}</Text>
            </View>
        )
    }
}