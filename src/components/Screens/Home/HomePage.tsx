import React, {useState, useEffect} from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { MusicList, CurrentMusic, HeaderBlock, Search, Title, Playlists } from '../../UI/index';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const Home: React.FC<any> = ({ navigation }) => {
  const [featuredPlaylists, updateFeaturedPlaylists] = useState([]);
  const [recommendations, updateRecommendations] = useState([]);
  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [searchOffset, updateSearchOffset] = useState(0);
  const [isFetching, setIsFetching] = useState(false); 

  const fetchRecommendations = async () => {
    let token: string | any = '';
    if (Platform.OS === "windows" || Platform.OS === "web") {
      token = window.localStorage.getItem('SecuredToken');
    } else {
      token = await SecureStore.getItemAsync('SecuredToken');
    }

    try {
      const response = await axios({
        method: "GET",
        url: 'https://api.spotify.com/v1/recommendations?limit=15&seed_genres=classical',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resultData = response.data.tracks;
      updateRecommendations(resultData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFeaturedPlaylists = async () => {
    let token: string | any = '';
    if (Platform.OS === "windows" || Platform.OS === "web") {
      token = window.localStorage.getItem('SecuredToken');
    } else {
      token = await SecureStore.getItemAsync('SecuredToken');
    }

    try {
      const response = await axios({
        method: "GET",
        url: 'https://api.spotify.com/v1/browse/featured-playlists',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resultData = response.data.playlists.items;
      updateFeaturedPlaylists(resultData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeaturedPlaylists();
    fetchRecommendations();
  }, []);

  // function to fetch search results
  const fetchSearchResults = async (offset: any) => {
    let token: string | any = '';
    if (Platform.OS === "windows" || Platform.OS === "web") {
      token = window.localStorage.getItem('SecuredToken');
    } else {
      token = await SecureStore.getItemAsync('SecuredToken');
    }

    if (searchTerm === "") {
      updateSearchResults([]);
      return;
    }

    setIsFetching(true); // Set fetching status to true

    try {
      const response = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track&limit=20&offset=${offset}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resultData = response.data.tracks.items;
      updateSearchResults(prevResults => [...prevResults, ...resultData]); //updating existing data
      updateSearchOffset(prevOffset => prevOffset + 20); // updating the offset
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false); // Set fetching status to false
    }
  };

  useEffect(() => {
    updateSearchResults([]);
    updateSearchOffset(0);
    fetchSearchResults(0);
  }, [searchTerm]);

  const fetchNextSearchResults = () => {
    if (!isFetching) {
      fetchSearchResults(searchOffset);
    }
  }

  const MusicListHeader = () => (
    <View>
          <Title title='Playlists' />
          <Playlists data={featuredPlaylists} navigation={navigation} />
          <Title title='Recommendations' />
    </View>
  );
  return (
    <SafeAreaView style={CurrentStyles.container}>
      <HeaderBlock name='Home' />
      <Search updateSearchQuery={updateSearchTerm} />
      <MusicList
          dataMusic={searchTerm.length > 0 ? searchResults : recommendations}
          header={searchTerm.length > 0 ? null : MusicListHeader}
          navigation={navigation}
          onEndReached={searchTerm.length > 0 ? fetchNextSearchResults : undefined}
      />
      <CurrentMusic navigation={navigation} />
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