import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface BannerProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  ViewStyle?: StyleProp<ViewStyle> | object; 
  IconStyle?: StyleProp<ViewStyle> | object; 
}

const Banner: React.FC<BannerProps> = ({ iconName, ViewStyle, IconStyle }) => (
  <View style={[CurrentStyle.ViewBanner, ViewStyle]}>
    <Feather name={iconName} style={[CurrentStyle.ViewBannerIcon, IconStyle]} />
  </View>
);

const CurrentStyle = StyleSheet.create({
    ViewBanner: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      ViewBannerIcon: { 
        fontSize:100, 
      },
});

export default Banner;