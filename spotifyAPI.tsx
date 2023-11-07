import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import { StyleSheet, Pressable, Text, Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

interface ComponentProps {
  onPress: () => void;
  placeholder: string;
}

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const SpotifyAuth: React.FC<ComponentProps> = ({onPress, placeholder}) => {
  const navigation = useNavigation();
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '06dbe354c1c64b98b81081e04ebf6211',
      scopes: ['user-read-email', 'playlist-modify-public', 'user-library-read','user-library-modify','playlist-modify-public', 'playlist-read-private','playlist-read-collaborative','playlist-modify-private', 'user-modify-playback-state', 'user-read-playback-state', 'user-read-currently-playing'],
      usePKCE: false,
      redirectUri: makeRedirectUri({ path: '/' }),
    },
    discovery
  );

  const handlePress = async () => {
    await promptAsync();
    onPress();
  };
  

  React.useEffect(() => {
    if (response?.type === 'success') {
        const result = response.params;

        if(result.access_token) {
          const expirationDate = new Date(result.expires_in).getTime();

          storeData(result.access_token, expirationDate)
        }
    }
  }, [response]);

  React.useEffect(() => {
    const checkTokenValidity = async () => {

      const result = await retrieveData();

      if(result?.accessToken && result?.expirationDate){
        const currentTime = Date.now();
        if(currentTime < parseInt(result.expirationDate)){
          navigation.navigate("TabsNavigation");
        } else {   
          navigation.navigate("Welcome");  
          deleteObject('SecuredToken');
          deleteObject('ExpirationData');
        }
      }
    }
    checkTokenValidity();
  }, []);

  return (
      <Pressable onPress={handlePress}>
          <Text style={CurrentStyles.BtnText}>
            {placeholder}
          </Text>
      </Pressable>
  );
}

async function storeData (storageValue: string, expirationDate: number) {
  try {
    if(Platform.OS === "windows" || Platform.OS === "web" ) {
      window.localStorage.setItem('SecuredToken', storageValue);
      window.localStorage.setItem('ExpirationData', expirationDate.toString());
    } else {
      await SecureStore.setItemAsync('SecuredToken', storageValue);
      await SecureStore.setItemAsync('ExpirationData', expirationDate.toString());
    }
  } catch (error) {
    console.error('Ошибка при сохранении:', error);
  }
}

async function retrieveData() {
  try {
    let accessToken: string | null = '';
    let expirationDate: string | null = '';
    if(Platform.OS === "windows" || Platform.OS === "web" ) {
      accessToken = window.localStorage.getItem('SecuredToken');
      expirationDate = window.localStorage.getItem('ExpirationData');
    } else {
      accessToken = await SecureStore.getItemAsync('SecuredToken');
      expirationDate = await SecureStore.getItemAsync('ExpirationData');
    }
    return (accessToken !== null && expirationDate !== null) ? { accessToken, expirationDate } : null ;
  } catch (error) {
    console.error('Ошибка при извлечении:', error);
  }
}

async function deleteObject(key: string): Promise<void> {
  try {
    if(Platform.OS === "windows" || Platform.OS === "web" ) {
      window.localStorage.removeItem(key); 
    } else {
      await SecureStore.setItemAsync(key, ''); 
    }
  } catch (error) {
    console.log('Ошибка при удалении объекта:', error);
  }
}

const CurrentStyles = StyleSheet.create({
  BtnText:{
      fontSize: 20,
      color:'#212529',
      width: 225,
      textAlign: 'center',
      backgroundColor:'#1AB14A',
      margin: 70,
      padding: 14, 
      borderRadius: 50,
  },
});

export default SpotifyAuth;