import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { styles } from '../../../styles/styles';
import { SongMenu } from '../Buttons/SongMenu';
import { MusicItem, NavigationType } from '../../../utils/Types';
import {TextComponent} from '../index';
import { Feather } from '@expo/vector-icons';

interface SongProps {
  parentItem: MusicItem;
  onPress: () => void;
}

export const Song: React.FC<SongProps> = ({ onPress, parentItem }) => {
  return (
    <View style={styles.songItem}>
      <Pressable style={styles.songMeta} onPress={onPress}>
        {parentItem.thumbnail 
        ? 
        <Image style={styles.songLogo} source={parentItem.thumbnail} /> 
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
            <TextComponent text={parentItem.title} style={styles.songTitle} />
            <View style={{ flexDirection: 'row' }}>
                <TextComponent text={parentItem.long} style={styles.songLong} />
                <TextComponent text={parentItem.author} style={styles.songAuthor} />
            </View>
        </View>
      </Pressable>
      <SongMenu parentItem={parentItem} />
    </View>
  );
}