import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentButtons: React.FC = () => {
  return (
    <View style={CurrentStyles.CurrentButtons}>
      <Pressable>
        <Feather name='play' style={CurrentStyles.CurrentPlayer} />
      </Pressable>
      <Pressable>
        <Feather name='x' style={CurrentStyles.CurrentPlayer} />
      </Pressable>
    </View>
  );
}

const CurrentStyles = StyleSheet.create({
    CurrentPlayer:{
        fontSize: 24,
        color:'rgba(255, 162, 0, 1)',
        paddingRight:10,    
    },
    CurrentButtons:{
        flexDirection: 'row',
        alignItems:'center',
    },
});

export default CurrentButtons;