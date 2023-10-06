import { SafeAreaView, View, Text} from 'react-native';
import {  Search, MusicList} from '../../UI/index';
import {styles} from '../../../styles/styles'
import { RouteProp } from '@react-navigation/native';
import { PlaylistItem } from '../../../utils/Types';

interface PlaylistProps {
  route: RouteProp<{ params: { item: PlaylistItem } }, 'params'>;
}

const PlaylistScreen: React.FC<PlaylistProps> = ({ route }) => {
  const item = route.params.item; 

    const FlatList_Header = () => {
      return (    
        <View style={{marginVertical: 20,}}>
          <Search/>
          <Text>{item.data.length}</Text>  
        </View>
      );
    }  
    return (
      <SafeAreaView style={styles.container}>
        <MusicList data={item.data} header={FlatList_Header} navigation={item.navigation}/>
      </SafeAreaView>
    );
  }
  
 

export default PlaylistScreen;