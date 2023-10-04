import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Song } from '../Items/SongItem';
import { MusicItem} from '../../utils/Types';

interface MusicListProps {
  dataMusic: MusicItem[];
  itemPressed: () => void;
  header: React.FC;
}

const MusicList: React.FC<MusicListProps> = (props) => {
  const _renderItem: ListRenderItem<MusicItem> = ({ item }) => (
    <Song key={item.id} parentItem={ item } onPress={props.itemPressed}/>
  );

  return (
    <FlatList
      data={props.dataMusic}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id.toString()} 
      ListHeaderComponent={props.header}
    />
  );
};

export default MusicList;