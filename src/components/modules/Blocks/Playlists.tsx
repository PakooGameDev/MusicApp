import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Playlist } from '../index';

import { playlist } from '../../utils/mockFile';

interface PlaylistsProps {
  Screen: any; // Замените тип на соответствующий
  navigation: any; // Замените тип на соответствующий
}

const Playlists: React.FC<PlaylistsProps> = ({ Screen, navigation }) => {
  const renderItem = ({ item, index }: ListRenderItemInfo<any>) => (
    <Playlist
      Item={item}
      Screen={Screen}
      data={playlist}
      index={index}
      navigation={navigation}
    />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()} // Предполагается, что id - это строка или число
      initialNumToRender={8}
      removeClippedSubviews={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={playlist}
      renderItem={renderItem}
    />
  );
};

export default Playlists;