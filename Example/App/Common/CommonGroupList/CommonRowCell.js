/**
 * @providesModules CommonRowCell
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

import screen from 'screen'

import {H3,Tip} from 'TextTool'

import {PropTypes} from 'prop-types'

export default class CommonRowCell extends Component<{}>{
    
    static propTypes = {
        rowData:PropTypes.object.isRequired
    }


    render(){
        return(
            <TouchableOpacity>
                {this._renderItemCell(this.props.rowData)}
            </TouchableOpacity>
        )
    }

    _renderItemCell(item){

        var className = item.constructor.name;

        if (className == 'CommonListItem'){


            return(
                <View style={{height: screen.width * 0.137,paddingLeft:8,flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
                    {item.image ? <View style={{width:45,justifyContent:'center',alignItems:'center'}}>
                        <Image source={{uri:item.image}} style={{width: 34* screen.onePixel,height:34 * screen.onePixel}}/>
                    </View>:null}
                    <View style={{flex:1,height:'100%',flexDirection:'row',alignItems:'center',borderBottomWidth: screen.onePixel *2, borderColor: '#e8e8e8'}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <H3 style={{fontSize:15}}>{item.title}</H3>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: 8}}>

                            {item.tipTitle?<Tip style={{marginRight:5}}>{item.tipTitle}</Tip>:null}
                            <Image source={{uri:'icon_shike_arrow'}} style={{width: 14* screen.onePixel,height:24 * screen.onePixel}}/>
                        </View>
                    </View>
                </View>
            )
        }
        if (className == 'CommonListSwitch'){
            this._renderCommonListSwitch(item);
        }
    }

    //渲染带箭头的cell
    _renderCommonListItem(item){
        console.log('过来了' + item.image)


    }
    //渲染带switch的cell
    _renderCommonListSwitch(item){

    }
}
const styles = StyleSheet.create({

})