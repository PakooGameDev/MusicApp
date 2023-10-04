import { SafeAreaView, View, Image,Text} from 'react-native';
import {styles} from '../modules/styles'
import { Feather } from  '@expo/vector-icons'

export function Player(props){
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems:'center',}}>
          <View  style={{height:340,width:340,elevation:10, borderRadius:5,backgroundColor: '#2a2e32',justifyContent: 'center',alignItems: 'center',}}>
            <Feather name='headphones' style={{ color: '#a1a3a4',fontSize:190, }}/>
          </View>
          <Image  />
          <Text numberOfLines={2} style={{}}>Title</Text> 
          <Text numberOfLines={2} style={{}}>Author</Text>  
        </View>
      </SafeAreaView>
    );
  }
  
 
