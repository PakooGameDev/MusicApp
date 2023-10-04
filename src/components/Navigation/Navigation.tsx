import { createStackNavigator } from '@react-navigation/stack';
import {Player, Welcome, Auth, PlaylistScreen} from '../Screens/index'
import { TabsNavigation } from './TabsNavigation';


const Stack = createStackNavigator(); // Создаем стэк постраничной навигации


export function MainStack () {
  return (
    /* Задаём начальный роутинг и формируем стэк. Первая траница - Welcome, дальше есть возможность перейти либо в приложение, либо к авторизации 
    (необходимо, чтобы переход к приложению был возможен только после успешной авторизации).*/
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>   
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="NavStack" component={NavStack} />
    </Stack.Navigator>
  );
}

// Создаем стэк приложения, где начальный маршрут и страница - табы, которые в свою очередь подгружают Home и создают роутинг между страницами приложения.
// После идут страницы, которые отображаются поверх табов и основных страниц. ??? Возможно стоит сделать их модальными окнами попросту
function NavStack ({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="TabsNavStack" screenOptions={{headerShown: false,}}>
      <Stack.Screen name="TabsNavStack" component={TabsNavigation} />
      <Stack.Screen name="Player" component={Player} options={StackOptions}/>
      <Stack.Screen name="PlaylistScreen" component={PlaylistScreen} options={StackOptions}/>
    </Stack.Navigator>
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
