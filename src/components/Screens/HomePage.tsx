import React from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet, View} from 'react-native';
import { MusicList,CurrentMusic, HeaderBlock,Search,Title,Playlists} from '../modules/index';
import {mockList, playlistData} from '../utils/mockFile';


export const Home: React.FC<any> = ({ navigation }) => {
  const MusicListHeader: React.FC = () => {
    return (
      <View>
        <Title title='Playlists' />
        <Playlists data={playlistData} itemPressed={() => navigation.navigate('PlaylistScreen')} />
        <Title title='Recommendations' />
      </View>
    )
  }
  return (
    <SafeAreaView style={CurrentStyles.container}>
      <HeaderBlock name='Home' />
      <Search/>
      <MusicList dataMusic={mockList} header={MusicListHeader} itemPressed={() => navigation.navigate('Player')}/>
      <CurrentMusic itemPressed={() => navigation.navigate('Player')} />
    </SafeAreaView>
  );
}
  
const CurrentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});