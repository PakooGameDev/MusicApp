import { SafeAreaView, View} from 'react-native';
import {  Search, MusicList} from '../modules/index';
import {styles} from '../../../styles'

    const FlatList_Header = () => {
        return (        
          <View style={{marginVertical: 20,}}><Search/></View>
        );
    }

  
  
const PlaylistScreen: React.FC<any> = (props) => {
    return (
      <SafeAreaView style={styles.container}>
        <MusicList data={props.data} header={FlatList_Header} navigation={props.navigation}/>
      </SafeAreaView>
    );
  }
  
 

export default PlaylistScreen;