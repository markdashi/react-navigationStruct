/**
 * @providesModule Home
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    SeparatorComponent,
    TouchableOpacity,
    Image
} from 'react-native';

import screen from 'screen'

import {H3,Tip} from 'TextTool'

// const CustomSeparatorComponent  = ({text}) => (
//     <View>
//         <SeparatorComponent />
//         <Text style={styles.separatorText}>{text}</Text>
//         <SeparatorComponent />
//     </View>
// );


// <TouchableOpacity onPress={() => {
//     this.props.navigation.navigate('Detail')
// }}>
// <H3 style={{height:44,backgroundColor:'red'}}>{item}</H3>
// </TouchableOpacity>
export default class Home extends React.Component{

     static navigationOptions = {
        title:<H3 style={{fontSize:18}}>首页</H3>
    }

    _renderItem({item}){
            return(
               <TouchableOpacity>
                   <View style={{height: screen.width * 0.137,paddingLeft:8,flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
                       <View style={{width:45,justifyContent:'center',alignItems:'center'}}>
                           <Image source={require('../Images/33.png')} style={{width: 40* screen.onePixel,height:35 * screen.onePixel}}/>
                       </View>
                       <View style={{flex:1,height:'100%',flexDirection:'row',alignItems:'center',borderBottomWidth: screen.onePixel, borderColor: '#e8e8e8'}}>
                           <View style={{flex:1,justifyContent:'center'}}>
                               <H3 style={{fontSize:15}}>{item}</H3>
                           </View>
                           <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: 8}}>

                                <Tip style={{marginRight:5}}>{'20'}</Tip>
                               <Image source={require('../Images/33.png')} style={{width: 25* screen.onePixel,height:25 * screen.onePixel}}/>
                           </View>
                       </View>
                   </View>
               </TouchableOpacity>
            )
    }
    _renderSectionHeader({section}){
            return(
                <View>
                    <Text>{section.sec}</Text>
                </View>
            )
    }


    render(){
        return(
            <SectionList
                renderItem={this._renderItem.bind(this)}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                // ItemSeparatorComponent={() =>  <CustomSeparatorComponent />}
                sections={[
                   {data:['item1','item2','item3'],sec:'s1'},
                   {data:['item1','item2','item3','item4','item5','item6'],sec:'s2'},
                   {data:['item1','item2'],sec:'s3'},
                   {data:['item1','item2','item3'],sec:'s4'},
                ]}
                keyExtractor={(item,index) => index}
                // stickySectionHeadersEnabled={false}
            />
        )
    }
}
const styles = StyleSheet.create({
    SeparatorStyle:{
        height:10,
        backgroundColor:'red'
    },
    separatorText: {
        color: 'gray',
        alignSelf: 'center',
        padding: 4,
        fontSize: 9,
    },
});