import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';
import { styles } from '../../../../styles';

interface PlaylistProps {
  Item: {
    thumbnail: string;
    title: string;
    author: string;
  };
  index: number;
  data: object[]; 
  navigation: any;
}

const Playlist: React.FC<PlaylistProps> = (props) => {
  const { Item, index, data, navigation } = props;

  return (
    <View style={{ marginLeft: index === 0 ? 31 : 0, marginRight: index === data.length ? 0 : 31 }}>
      <Pressable onPress={() => { navigation.navigate('PlaylistScreen') }}>
        <Image style={styles.songLogoRec} source={{ uri: Item.thumbnail }} />
        <View style={{ width: 150 }}>
          <Text numberOfLines={1} style={styles.songTitle}>{Item.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text numberOfLines={1} style={styles.songLong}>{data.length} songs</Text>
            <Text numberOfLines={1} style={styles.songAuthor}>{Item.author}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Playlist;