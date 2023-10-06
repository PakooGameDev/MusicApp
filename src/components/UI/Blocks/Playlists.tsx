import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Playlist } from '../index';
import {PlaylistItem} from '../../../utils/Types';
import { NavigationProp, RouteProp } from '@react-navigation/native';

interface MusicListProps {
  data: PlaylistItem[];
  navigation: NavigationProp<any>;
}

const Playlists: React.FC<MusicListProps> = ({data, navigation}) => {
  const renderItem = ({ item, index }: ListRenderItemInfo<PlaylistItem>) => (
    <Playlist 
      key={item.id}
      Item={item}
      dataLength={item.data.length}
      index={index}
      onPress={() => navigation.navigate('PlaylistScreen', {item})}
    />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()} // Предполагается, что id - это строка или число
      initialNumToRender={8}
      removeClippedSubviews={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default Playlists;