import React,{useState} from 'react';
import { SafeAreaView, View} from 'react-native';
import { MusicList,CurrentMusic, Header,Search,Title,Playlists} from '../modules/index';
import {styles} from '../../../styles';

let SongLogo = require('../../../assets/songLogo.jpg');

const list = [
  {
      id: '001',
      title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
      author: 'FFDP',
      thumbnail: SongLogo,
      long: '4:54'
  },
  {
      id: '002',
      title: "Save Save Your Tears Save Your Tears Save Your  Tears",
      author: 'Sabaton',
      thumbnail: SongLogo,
      long: '4:54'
  },
  {
      id: '003',
      title: "Save Save Your Tears Save Your Tears Save Your  Tears",
      author: 'LinkinParkLinkinParkLinkinParkLinkinPark',
      thumbnail: SongLogo,
      long: '4:54'
  },
  {
      id: '004',
      title: "Save Your Tears",
      author: 'LInkinPark',
      thumbnail: SongLogo,
      long: '4:54'
  },
]

  const FlatList_Header = (navigation) => {
    return (
        <View>
            <Search/>
            <Title title='Playlists'/>
            <Playlists navigation={navigation} Screen='Home' />
            <Title title='Recommendations'/>
        </View>
    );
  }
    

export function Home({navigation}){


 
    return (
      <SafeAreaView style={styles.container}>
        <Header  name='Home'/>
        <MusicList data={list} header={FlatList_Header(navigation)} />
        <CurrentMusic name={'smth'} author={'smne'} navigation={navigation}/>
      </SafeAreaView>
    );
  }
  
 
