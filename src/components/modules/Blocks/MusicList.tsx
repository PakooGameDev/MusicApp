import { FlatList} from 'react-native';
import { Song } from '../Items/SongItem';

export function MusicList(props){
    const _renderItem = ({item,index}) => (
    <Song    
        parentItem={{
            Index:index,
            Item:item,
        }} 
    />        
    );
    return ( 
    <FlatList    
        data={props.data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={props.header}
    />          
    );
  }
 

