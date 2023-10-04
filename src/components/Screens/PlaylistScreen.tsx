import { SafeAreaView, View} from 'react-native';
import {  Search, MusicList} from '../modules/index.js';
import {styles} from '../modules/styles.js'

    const FlatList_Header = () => {
        return (
            
                <View style={{marginVertical: 20,}}><Search/></View>
 
        );
    }
  
export function PlaylistScreen(){
    return (
      <SafeAreaView style={styles.container}>
        <MusicList header={FlatList_Header} Screen='Playlist'/>
      </SafeAreaView>
    );
  }
  
 
