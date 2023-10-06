import React from 'react';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import { PlaylistItem } from '../../../utils/Types';
import { Feather } from '@expo/vector-icons';

interface PlaylistProps {
  Item: PlaylistItem,
  index: number;
  dataLength: number; 
  onPress: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({ onPress, Item, index, dataLength }) => {
  return (
    <View style={{ marginLeft: index === 0 ? 31 : 0, marginRight: index === dataLength ? 31 : 31 }}>
      <Pressable onPress={onPress}>
      {Item.thumbnail 
        ? 
        <Image style={CurrentStyles.songLogoRec} source={{ uri: Item.thumbnail }} />
        : 
        <View style={{ 
          height: 180, 
          width: 150,  
          borderRadius: 20, 
          backgroundColor: '#2a2e32', 
          marginBottom:10,
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
          <Feather name='headphones' style={{ color: '#a1a3a4', fontSize: 60,}} />
        </View>
        }
        <View style={{ width: 150 }}>
          <Text numberOfLines={1} style={CurrentStyles.songTitle}>{Item.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text numberOfLines={1} style={CurrentStyles.songLong}>{dataLength} songs</Text>
            <Text numberOfLines={1} style={CurrentStyles.songAuthor}>{Item.author}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const CurrentStyles = StyleSheet.create({
    songLogoRec: {
        width: 150,
        height: 175,
        resizeMode: 'stretch',
        borderRadius:20,
        marginBottom:5,
      },
      songTitle:{
        fontWeight: '300',
        fontSize: 16,
        color:'#d9dce2',
        width:'95%',
      },
      songAuthor:{
        fontWeight: '300',
        fontSize:13, 
        color:'#a1a3a4',
        width:'70%',
        marginLeft: 10,
      },
      songLong:{
        fontWeight: '300',
        fontSize:13, 
        color: '#a1a3a4',
      },  
  });

export default Playlist;