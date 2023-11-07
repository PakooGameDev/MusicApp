import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { styles } from '../../../styles/styles';
import { SongMenu } from '../Buttons/SongMenu';
import { MusicItem, NavigationType } from '../../../utils/Types';
import {TextComponent} from '../index';
import { Feather } from '@expo/vector-icons';
import { convertDuration } from './../../../utils/methods';

interface SongProps {
  parentItem: any;
  onPress: () => void;
}

export const Song: React.FC<SongProps> = ({ onPress, parentItem }) => {
  const authorNames = parentItem.artists.reduce((names:any, artist:any) => {
    return names + artist.name + ' ';
  }, '');
  return (
    <View style={styles.songItem}>
      <Pressable style={styles.songMeta} onPress={onPress}>
        {parentItem.album.images[0].url
        ? 
        <Image style={styles.songLogo} source={parentItem.album.images[0].url} /> 
        : 
        <View style={{ 
          height: 60, 
          width: 60, 
          elevation: 10, 
          borderRadius: 100, 
          backgroundColor: '#2a2e32', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
          <Feather name='headphones' style={{ color: '#a1a3a4', fontSize: 30,}} />
        </View>
        }
        
        <View style={{ marginLeft: 10, width: 250 }}>
            <TextComponent text={parentItem.name} style={styles.songTitle} />
            <View style={{ flexDirection: 'row' }}>
                <TextComponent text={convertDuration(parentItem.duration_ms)} style={styles.songLong} />   
                <TextComponent text={authorNames} style={styles.songAuthor} />
            </View>
        </View>
      </Pressable>
      <SongMenu parentItem={parentItem} />
    </View>
  );
}