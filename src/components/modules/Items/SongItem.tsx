import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { styles } from '../../../../styles';
import { SongMenu } from '../Buttons/SongMenu';
import { MusicItem, NavigationType } from '../../utils/Types';
import {TextComponent} from '../index';

interface SongProps {
  parentItem: MusicItem;
  onPress: () => void;
}

export const Song: React.FC<SongProps> = ({ onPress, parentItem }) => {
  return (
    <View style={styles.songItem}>
      <Pressable style={styles.songMeta} onPress={onPress}>
        <Image style={styles.songLogo} source={{ uri: parentItem.thumbnail }} />
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