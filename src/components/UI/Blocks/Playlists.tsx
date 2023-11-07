import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Playlist } from '../index';
import {PlaylistItem} from '../../../utils/Types';
import { NavigationProp, RouteProp } from '@react-navigation/native';

interface MusicListProps {
  data: any[];
  navigation: NavigationProp<any>;
}

const Playlists: React.FC<MusicListProps> = ({data, navigation}) => {
  const renderItem = ({ item, index }: ListRenderItemInfo<any>) => (
    <Playlist 
      key={item.id}
      item={item}
      dataLength={item.duration_ms}
      index={index}
      onPress={() => navigation.navigate('PlaylistScreen', {item})}
    />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id} // Предполагается, что id - это строка или число
      initialNumToRender={15}
      removeClippedSubviews={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default Playlists;