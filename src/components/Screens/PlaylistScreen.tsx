import { SafeAreaView, View} from 'react-native';
import {  Search, MusicList} from '../modules/index';
import {styles} from '../../../styles'

    const FlatList_Header = () => {
        return (
            
                <View style={{marginVertical: 20,}}><Search/></View>
 
        );
    }
  
const PlaylistScreen: React.FC = () => {
    return (
      <SafeAreaView style={styles.container}>
        <MusicList header={FlatList_Header} Screen='Playlist'/>
      </SafeAreaView>
    );
  }
  
 

export default PlaylistScreen;