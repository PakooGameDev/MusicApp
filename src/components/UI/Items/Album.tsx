import React from 'react';
import {  View,TouchableOpacity,  Image,Text} from 'react-native';
import { Feather } from  '@expo/vector-icons'

export function Album (props) {
return(
    <View style={{marginLeft:20,}}>
        <TouchableOpacity onPress={props.onPress}>
            <View  style={{height:105,width:105, borderRadius:10,backgroundColor: '#2a2e32',justifyContent: 'center',alignItems: 'center',}}>
                <Feather name='headphones' style={ props.active == props.index ? { color:'rgba(255, 162, 0, 1)',fontSize:55}:{ color:'#a1a3a4',fontSize:55,} }/>
                <Text numberOfLines={1} style={{ fontWeight: '300',  fontSize:13,   color:'#a1a3a4',}}>{props.songs} songs</Text>
            </View>
            <Text numberOfLines={1} style={{fontWeight: '300',  fontSize: 16,  marginLeft:5, color:'#d9dce2',width:100}}>{props.title}</Text>
        </TouchableOpacity>
    </View>
)};


