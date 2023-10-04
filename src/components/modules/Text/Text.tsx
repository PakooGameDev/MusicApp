import React from 'react';
import { Text, StyleProp, TextStyle, StyleSheet} from 'react-native';


interface TextComponentProps {
  text: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle> | object; 
}

const TextComponent: React.FC<TextComponentProps> = ({ text, numberOfLines = 1, style }) => (
  <Text numberOfLines={numberOfLines} style={style}>
    {text}
  </Text>
);

export default TextComponent;