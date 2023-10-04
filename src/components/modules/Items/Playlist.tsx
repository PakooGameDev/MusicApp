import React from 'react';
import {  View,TouchableOpacity,  Image,Text} from 'react-native';
import {styles} from '../styles.js'

export function Playlist (props) {
return(
    <View style={{marginLeft: props.index === 0 ? 31 : 0, marginRight: props.index === props.data.length ? 0 : 31}}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('PlaylistScreen')}}>
            <Image style={styles.songLogoRec} source={props.Item.thumbnail}/>
            <View style={{width:150}}>
                <Text numberOfLines={1} style={styles.songTitle}>{props.Item.title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text numberOfLines={1} style={styles.songLong}>{props.data.length} songs</Text>
                    <Text numberOfLines={1} style={styles.songAuthor}>{props.Item.author}</Text>
                </View>  
            </View>
        </TouchableOpacity>
    </View>
)};


