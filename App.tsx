import  'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import  { MainStack } from './src/components/Navigation/Navigation'
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>    
        <MainStack />
      </NavigationContainer>
    </MenuProvider> 
  );
}
