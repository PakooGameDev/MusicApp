import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Song } from '../Items/SongItem';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { MusicItem} from '../../../utils/Types';

interface MusicListProps {
  dataMusic: MusicItem[];
  navigation: NavigationProp<any>; 
  header: React.FC;
}

const MusicList: React.FC<MusicListProps> = ({ dataMusic, navigation, header }) => {
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
      keyExtractor={(item) => item.id.toString()} 
      ListHeaderComponent={header}
    />
  );
};

export default MusicList;