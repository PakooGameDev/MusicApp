import React,{useState} from 'react';
import { SafeAreaView, View} from 'react-native';
import { MusicList,CurrentMusic, HeaderBlock,Search,Title,Playlists} from '../modules/index';
import {styles} from '../../../styles';

import {mockList} from '../utils/mockFile';

const FlatList_Header = ( navigation ) => {
  return (
      <View>
          <Search/>
          <Title title='Playlists'/>
          <Playlists navigation={ navigation } Screen='Home' />
          <Title title='Recommendations'/>
      </View>
  );
}
    

export const Home: React.FC = ({ navigation }) => {

    return (
      <SafeAreaView style={styles.container}>
        <HeaderBlock name='Home'/>
        <MusicList data={mockList} header={FlatList_Header(navigation)} />
        <CurrentMusic name={'smth'} author={'smne'} navigation={navigation}/>
      </SafeAreaView>
    );
  }
  
 
