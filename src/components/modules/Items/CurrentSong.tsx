import React from 'react';
import { View , StyleSheet } from 'react-native';
import { CurrentInfo, CurrentButtons } from '../index';

import { MusicItem } from '../../utils/Types';
import { mockList } from '../../utils/mockFile';

const data: MusicItem = mockList[0];

interface CurrentSong {
  itemPressed: () => void;
}

const CurrentMusic: React.FC<CurrentSong> = ({itemPressed}) => {
  return (
    <View style={CurrentStyles.CurrentMusic}>
      <CurrentInfo data={data} onPress={itemPressed}/>
      <CurrentButtons/>
    </View>
  );
}

const CurrentStyles = StyleSheet.create({
    CurrentMusic:{
        height: 69,
        borderTopWidth: 3,
        borderColor:'rgba(255, 162, 0, 1)',
        backgroundColor: '#2a2e32',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        zIndex:1,
    },
});

export default CurrentMusic;



