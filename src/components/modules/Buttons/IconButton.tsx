
import React from 'react';
import { TouchableOpacity, View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


interface ButtonProps {
  onPress: () => void;
  iconName: React.ComponentProps<typeof Feather>['name'];
  ViewStyle?: StyleProp<ViewStyle> | object; 
  IconStyle?: StyleProp<ViewStyle> | object; 
}

const IconButton: React.FC<ButtonProps> = ({ onPress, iconName, ViewStyle, IconStyle}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[CurrentStyle.enterBtn, ViewStyle]}>
            <Feather name={iconName} style={[CurrentStyle.enterBtnIcon, IconStyle]} />
        </View>
    </TouchableOpacity>
);

const CurrentStyle = StyleSheet.create({
    enterBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    enterBtnIcon: {
        fontSize:25,
    }
});

export default IconButton;