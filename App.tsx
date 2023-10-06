import React, { useState } from 'react';
import axios from 'axios';
import  'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import  MainStack from './src/components/Navigation/Navigation'
import { MenuProvider } from 'react-native-popup-menu';
import VKAuth from './VKService';


const App = () => {
  const [accessToken, setAccessToken] = useState('');


  async function authenticate(token: string) {
    try {
      setAccessToken(token);
      // Теперь можно использовать accessToken для запросов к API
      const response = await axios.get(`https://api.vk.com/method/audio.get?access_token=${accessToken}&v=5.154`);
      
      // Обработка ответа API и извлечение музыки
      const musicData = response.data.response;

      console.log(musicData);
      // Дальнейшая обработка данных музыки...
    } catch (error) {
      console.error('Ошибка аутентификации:', error);
    }
  }

  return (
    <MenuProvider>
      <NavigationContainer>
        <VKAuth onAuthSuccess={authenticate} />
        {accessToken && <p>Access Token: {accessToken}</p>}
        <MainStack />   
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;