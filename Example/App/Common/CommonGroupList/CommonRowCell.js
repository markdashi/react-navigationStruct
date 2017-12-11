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
    Image,
    Switch
} from 'react-native';

import screen from 'screen'

import {H3,Tip} from 'TextTool'

import {PropTypes} from 'prop-types'

export default class CommonRowCell extends Component<{}>{
    
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOn:this.props.rowData.switchIsOn
        };
      }


    render(){
        return(
            <TouchableOpacity
                disabled={this.props.rowData.disabled}
                onPress={() => {
                     if (this.props.rowData.itemClick){
                           this.props.rowData.itemClick()
                     }
                     if (this.props.didSelectedItem){
                         this.props.didSelectedItem(this.props.rowData)
                     }
                     if (this.props.rowData.routeScreen){

                          if (this.props.navigation){
                             var route = this.props.rowData.routeScreen.screen;
                             this.props.navigation.navigate(route)
                          } 
                     }
                }}
            >
                {this._renderItemCell(this.props.rowData)}
            </TouchableOpacity>
        )
    }

    _renderItemCell(item){
        
        var className = item.constructor.name;

        if (className == 'CommonListItem' || className == 'CommonTextItem'){
            return(
                <View style={[styles.containStyle,this.props.CommonRowCellStyle]}>
                    {item.image ? <View style={{width:45,justifyContent:'center',alignItems:'center'}}>
                        <Image source={{uri:item.image}} style={[styles.imageStyle,this.props.imageStyle]}/>
                    </View>:null}
                    <View style={styles.rightContainStyle}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <H3 style={[styles.titleTextStyle,this.props.titleStyle]}>{item.title}</H3>
                        </View>
                        <View style={[styles.rightAccessoryStyle,this.props.accessoryStyle]}>
                        {item.tipTitle?<Tip style={[styles.tipTitleStyle,this.props.tipTitleStyle,item.customItemTipStyle]}>{item.tipTitle}</Tip>:null}
                        {(!item.hiddenArrow)?<Image source={require('../imgs/icon_shike_arrow.png')} style={{width: 14* screen.onePixel,height:24 * screen.onePixel}}/>:null}
                    </View>
                    </View>
                </View>
            )
        }
        if (className == 'CommonSwitchItem'){
            //渲染带switch的cell
            return(
                <View style={[styles.containStyle,this.props.CommonRowCellStyle]}>
                    {item.image ? <View style={{width:45,justifyContent:'center',alignItems:'center'}}>
                        <Image source={{uri:this.props.rowData.image}} style={[styles.imageStyle,this.props.imageStyle]}/>
                    </View>:null}
                    <View style={styles.rightContainStyle}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <H3 style={[styles.titleTextStyle,this.props.titleStyle]}>{this.props.rowData.title}</H3>
                        </View>
                        <View style={[styles.rightAccessoryStyle,this.props.accessoryStyle]}>
                            <Switch
                                onValueChange={(value)=>{
                                   this.setState({
                                      isOn:value
                                   })
                                 if (this.props.rowData.switchOnvalueChange){
                                     this.props.rowData.switchOnvalueChange(value)
                                 }
                            }}
                                onTintColor={this.props.switchTintColor}
                                value={this.state.isOn}
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }

}
const styles = StyleSheet.create({
    containStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        height: screen.width * 0.137,
        paddingLeft:8,
    },
    imageStyle:{
        width: 34* screen.onePixel,
        height:34 * screen.onePixel
    },
    rightContainStyle:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        height:'100%',
        borderBottomWidth: screen.onePixel *1,
        borderColor: '#e8e8e8'
    },
    titleTextStyle:{
        fontSize:15
    },
    rightAccessoryStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8
    },
    tipTitleStyle:{
        marginRight:5,
    }
})