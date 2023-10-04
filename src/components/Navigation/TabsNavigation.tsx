import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { Home, Library, Settings } from '../Screens/index';

const TabsMenu = createBottomTabNavigator(); // Нижнее навигационное меню - табы

export function TabsNavigation() {
  return (
    <TabsMenu.Navigator initialRouteName="Home" screenOptions={TabsMenuOptions}>
      <TabsMenu.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name='home' color={color} size={size} />
        ),
      }} />
      <TabsMenu.Screen name='library' component={Library} options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name='music' color={color} size={size} />
        ),
      }} />
      <TabsMenu.Screen name='settings' component={Settings} options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name='settings' color={color} size={size} />
        ),
      }} />
    </TabsMenu.Navigator>

  );
}

const TabsMenuOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height:55,
    backgroundColor: '#2a2e32',
    elevation:0,
  },
  tabBarInactiveTintColor:'#a1a3a4',
  tabBarActiveTintColor:'rgba(255, 162, 0, 1)',
};