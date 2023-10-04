import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { MusicItem } from '../../utils/Types';

interface CurrentInfoProps {
  data: MusicItem;
  onPress: () => void;
}

const CurrentInfo: React.FC<CurrentInfoProps> = ({ data, onPress }) => {
  return (
    <Pressable style={CurrentStyles.CurrentInfo} onPress={onPress}>
      <Image style={{ height: 50, width: 50, borderRadius: 5 }} source={data.thumbnail} />
      <View style={{ marginLeft: 10, width: 200 }}>
        <Text numberOfLines={1} style={CurrentStyles.songTitle}>{data.title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text numberOfLines={1} style={CurrentStyles.songLong}>{data.long}</Text>
          <Text numberOfLines={1} style={CurrentStyles.songAuthor}>{data.author}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const CurrentStyles = StyleSheet.create({
      CurrentInfo:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
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

export default CurrentInfo;