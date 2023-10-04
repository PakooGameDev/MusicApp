import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Home, Library, Settings } from '../Screens/index';

type TabsParamList = {
  Home: React.FC;
  Library: React.FC;
  Settings: React.FC;
};

const TabsMenu = createBottomTabNavigator<TabsParamList>(); // Нижнее навигационное меню - табы

const TabsNavigation: React.FC = () => {
  const TabsMenuOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      height: 55,
      backgroundColor: '#2a2e32',
      elevation: 0,
    },
    tabBarInactiveTintColor: '#a1a3a4',
    tabBarActiveTintColor: 'rgba(255, 162, 0, 1)',
  };

  return (
    <TabsMenu.Navigator initialRouteName="Home" screenOptions={TabsMenuOptions}>
      <TabsMenu.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          ),
        }}
      />
      <TabsMenu.Screen
        name='Library'
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='music' color={color} size={size} />
          ),
        }}
      />
      <TabsMenu.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='settings' color={color} size={size} />
          ),
        }}
      />
    </TabsMenu.Navigator>
  );
};

export default TabsNavigation;