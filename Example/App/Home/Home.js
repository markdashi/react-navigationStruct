/**
 * @providesModule Home
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Home extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>
                <Text>{'Home'}</Text>
            </View>
        )
    }
}
