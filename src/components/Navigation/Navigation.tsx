
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from  '@expo/vector-icons'

import {Home, Library, Settings, Player, Welcome, Auth, PlaylistScreen} from '../Screens/index.js'


const Stack = createStackNavigator();

export function MainStack () {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="NavStack" component={NavStack} />
    </Stack.Navigator>
  );
}

function NavStack ({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Navigation" component={Navigation} />
      <Stack.Screen name="Player" component={Player} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#212529',
            elevation:0
          },
          headerTintColor: '#fff',
      }}/>
      <Stack.Screen name="PlaylistScreen" component={PlaylistScreen} options={{
          headerShown: false,
      }}/>
    </Stack.Navigator>
  );
}

const navMenu = createBottomTabNavigator();
 function Navigation() {
    return (
     
      <navMenu.Navigator  
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height:55,
          backgroundColor: '#2a2e32',
          elevation:0,
        },
        tabBarInactiveTintColor:'#a1a3a4',
        tabBarActiveTintColor:'rgba(255, 162, 0, 1)',
      }}>
          <navMenu.Screen name='Home' component={Home} options={{
             tabBarIcon:({color, size}) => (
                <Feather name='home' color={color} size={size}/>
              ),      
            }}
          />
          <navMenu.Screen name='library' component={Library} options={{
              tabBarIcon:({color, size}) => (
                <Feather name='music' color={color} size={size}/>
              ),
            }}
          />         
          <navMenu.Screen name='settings' component={Settings} options={{
              tabBarIcon:({color, size}) => (
                <Feather name='settings' color={color} size={size}/>
              ),
            }}
          />
      </navMenu.Navigator>
      
    );
}
  
