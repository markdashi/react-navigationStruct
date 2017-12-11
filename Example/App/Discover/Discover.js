/**
 * @providesModule Discover
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {H3} from 'TextTool';


export default class Discover extends React.Component{

    static navigationOptions = {
        headerTitle:<H3>发现</H3>
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text>{'Discover'}</Text>

                <Text onPress={()=>{
                       this.props.navigation.navigate('Detail')
                }}>{'点击我就要跳转了'}</Text>
                <Text onPress={()=>{
                       this.props.navigation.navigate('Profile')
                }}>{'跳转到账号界面'}</Text>
                <Image source={{uri:'33.png'}} style={{width:50,height:50}}/>
            </View>
        )
    }
}