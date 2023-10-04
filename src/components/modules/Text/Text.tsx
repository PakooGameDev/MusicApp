import React from 'react';
import { Text, StyleProp, TextStyle, StyleSheet} from 'react-native';


interface TextComponentProps {
  text: string;
  numberOfLines: number;
  style?: StyleProp<TextStyle> | object; // Проп для пользовательских стилей
}

const TextComponent: React.FC<TextComponentProps> = ({ text, numberOfLines, style }) => (
  <Text numberOfLines={numberOfLines} style={[CurrentStyle.p, style]}>
    {text}
  </Text>
);

const CurrentStyle = StyleSheet.create({
    p: {
        textAlign:'center',
        fontWeight: '300',
        fontSize:16,  
        color:'#a1a3a4',
      },
});


export default TextComponent;