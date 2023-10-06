import React from 'react';
import { Pressable, Text, StyleProp, TextStyle, StyleSheet } from 'react-native';
import {TextComponent} from '../index'

interface ButtonProps {
  onPress: () => void;
  buttonText: string;
  textStyle?: StyleProp<TextStyle>; // Проп для пользовательских стилей текста
}

const TextButton: React.FC<ButtonProps> = ({ onPress, buttonText, textStyle }) => (
  <Pressable onPress={onPress}>
    <TextComponent text={buttonText} numberOfLines={2} style={[CurrentStyle.TextStyle, textStyle]}/>
  </Pressable>
);

const CurrentStyle = StyleSheet.create({
    TextStyle: {
      color:'rgba(255, 162, 0, 1)',
      fontWeight: '300',
      fontSize:22,
      marginVertical:50,
    },
});

export default TextButton;