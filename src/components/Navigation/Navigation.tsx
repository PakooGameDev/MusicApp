import { createStackNavigator } from '@react-navigation/stack';
import { Player, Welcome, Auth, PlaylistScreen } from '../Screens/index';
import TabsNavigation from './TabsNavigation';
import { MainStackParamList } from '../../utils/Types';
import VKAuth from '../../../VKService';

const RootStack = createStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Welcome" component={Welcome} />
      <RootStack.Screen name="Auth" component={VKAuth} />
      <RootStack.Screen name="TabsNavigation" component={TabsNavigation} />
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


export default MainStack;