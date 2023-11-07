import React from 'react';
import  'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import  MainStack from './src/components/Navigation/Navigation'
import { MenuProvider } from 'react-native-popup-menu';


const App = () => {

  return (
    <MenuProvider>
      <NavigationContainer>
        <MainStack />   
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;