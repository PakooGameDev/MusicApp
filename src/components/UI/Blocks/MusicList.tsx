import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Song } from '../Items/SongItem';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { MusicItem} from '../../../utils/Types';

interface MusicListProps {
  dataMusic: any[];
  navigation: NavigationProp<any>; 
  header: React.FC | null;
  onEndReached:  (() => void) | undefined;
}

const MusicList: React.FC<MusicListProps> = ({ dataMusic, navigation, header, onEndReached}) => {
  const _renderItem: ListRenderItem<MusicItem> = ({ item }) => (
    <Song
      key={item.id}
      parentItem={item}
      onPress={() => navigation.navigate('Player', { item })}
    />
  );
  return (
    <FlatList
      data={dataMusic}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id} 
      ListHeaderComponent={header}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MusicList;