import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Playlist } from '../index';
import {PlaylistItem} from '../../utils/Types';


interface MusicListProps {
  data: PlaylistItem[];
  itemPressed: () => void;
}

const Playlists: React.FC<MusicListProps> = (props) => {
  const renderItem = ({ item, index }: ListRenderItemInfo<PlaylistItem>) => (
    <Playlist 
      key={item.id}
      Item={item}
      dataLength={item.data.length}
      index={index}
      onPress={props.itemPressed}
    />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()} // Предполагается, что id - это строка или число
      initialNumToRender={8}
      removeClippedSubviews={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.data}
      renderItem={renderItem}
    />
  );
};

export default Playlists;