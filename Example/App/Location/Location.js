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

export default class Location extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>
                <Text>{'Location'}</Text>
            </View>
        )
    }
}
