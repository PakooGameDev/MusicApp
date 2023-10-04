import { createStackNavigator } from '@react-navigation/stack';
import { Player, Welcome, Auth, PlaylistScreen } from '../Screens/index';
import { TabsNavigation } from './TabsNavigation';

type MainStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  NavStack: undefined;
  TabsNavStack: undefined;
  Player: undefined;
  PlaylistScreen: undefined;
};

const RootStack = createStackNavigator<MainStackParamList>();

export function MainStack() {
  return (
    <RootStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Welcome" component={Welcome} />
      <RootStack.Screen name="Auth" component={Auth} />
      <RootStack.Screen name="TabsNavStack" component={TabsNavigation} />
      <RootStack.Screen name="Player" component={Player} options={StackOptions} />
      <RootStack.Screen name="PlaylistScreen" component={PlaylistScreen} options={StackOptions} />
    </RootStack.Navigator>
  );
}

// ScreenOptions 
const StackOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: '#212529',
    elevation:0
  },
  headerTintColor: '#fff',
};
