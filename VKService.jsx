import React, { useEffect } from 'react';
import { Linking } from 'react-native';

const VKAuth = ({ onAuthSuccess }) => {
  const API_ID = '51763901';
  const API_REDIRECTED_URL = 'https://oauth.vk.com/blank.html';
  // URL для авторизации VK
  const vkAuthURL = `https://oauth.vk.com/authorize?client_id=${API_ID}&display=page&redirect_uri=${API_REDIRECTED_URL}&scope=offline,audio&response_type=token&v=5.154`;

  useEffect(() => {
    // Функция для обработки перехода после авторизации
    const handleDeepLink = (event) => {
      const url = event.url;
      if (url.includes(API_REDIRECTED_URL)) {
        // Извлекаем access_token из URL
        const token = url.match(/access_token=([^&]*)/)[1];
        onAuthSuccess(token);
      }
    };

    // Открываем URL для авторизации VK при монтировании компонента
    Linking.openURL(vkAuthURL);

    // Добавляем обработчик события для перехвата DeepLink после авторизации
    Linking.addEventListener('url', handleDeepLink);

    return () => {
      // Очищаем обработчик события DeepLink при размонтировании компонента
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, [onAuthSuccess]);

  // Возвращаем null, так как редирект будет обработан через DeepLinking
  return null;
};

export default VKAuth;