import { SafeAreaView, View, Image,Text,Platform, StatusBar,TouchableOpacity} from 'react-native';
import {styles} from '../../../styles.js'
import { Feather } from  '@expo/vector-icons'

export function Welcome({navigation}){
    return (
      <SafeAreaView style={{  
        flex: 1,
        backgroundColor: '#212529',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{justifyContent: 'center',alignItems: 'center',marginBottom:70}}>
          <View  style={{height:200,width:200,marginBottom:50, elevation:10, borderRadius:200,backgroundColor: '#2a2e32',justifyContent: 'center',alignItems: 'center',}}>
            <Feather name='headphones' style={{ color: 'rgba(255, 162, 0, 1)',fontSize:100, }}/>
          </View>
          <Image  />
          <Text numberOfLines={2} style={{color:'#d9dce2',fontSize:28,}}>Welcome to MusicApp!</Text> 
          <Text numberOfLines={4} style={{textAlign:'center', marginTop: 10,marginHorizontal:25, fontWeight: '300',fontSize:16,  color:'#a1a3a4',}}>Our App is not just a player! Our smart  neural network can understand the lyrics, so u can find music by passing theme to it</Text>  
        <TouchableOpacity onPress={()=>{navigation.navigate('Auth')}}>
        <Text numberOfLines={2} style={{color:'rgba(255, 162, 0, 1)',fontWeight: '300',fontSize:22,marginVertical:50,}}>Login</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('NavStack')}}>
          <View  style={{height:70,width:70, elevation:10, borderRadius:70,backgroundColor:'rgba(255, 162, 0, 1)',justifyContent: 'center',alignItems: 'center',}}>
            <Feather name='corner-up-right' style={{ color:  '#2a2e32',fontSize:25, }}/>
          </View> 
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
 
