import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <View style={CurrentStyles.title}>
      <Text style={CurrentStyles.titleItems}>{title}</Text>
      <Feather name="chevron-right" color="rgba(255, 162, 0, 1)" size={20} />
    </View>
  );
};


const CurrentStyles = StyleSheet.create({
    title:{    
        width: '90%',
        alignSelf: 'center', 
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
      },
      titleItems:{
        fontSize: 18,
        color: '#a1a3a4',
      },   
  });

export default Title;