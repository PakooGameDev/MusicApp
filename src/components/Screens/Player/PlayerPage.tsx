import React from 'react';
import { SafeAreaView, View, Text,Image, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MusicItem } from '../../../utils/Types';
import { RouteProp } from '@react-navigation/native';
import {styles} from '../../../styles/styles'
import { Slider } from '@react-native-assets/slider'

interface PlayerProps {
  route: RouteProp<{ params: { item: MusicItem } }, 'params'>;
}

const Player: React.FC<PlayerProps> = ({ route }) => {
  const item = route.params.item; 
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ height: 340, width: 340, elevation: 10, borderRadius: 5, backgroundColor: '#2a2e32', justifyContent: 'center', alignItems: 'center' }}>
          {item.thumbnail ? <Image style={{ height: 340, width: 340, borderRadius: 5 }} source={item.thumbnail} /> : <Feather name='headphones' style={{ color: '#a1a3a4', fontSize: 190 }} />}
        </View>
        <Text numberOfLines={2} style={{color: 'green', }}>{item.title}</Text>
        <Text numberOfLines={2}>{item.author}</Text>
        <View>
          <Slider value={12} minimumValue={0} maximumValue={10000} /> 
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Player;