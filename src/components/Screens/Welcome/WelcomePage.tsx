import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { WelcomePage } from '../../../styles/styles';
import { NavigationType } from '../../../utils/Types'
import { TextButton, TextComponent, Banner, IconButton } from '../../UI/index';

const Welcome: React.FC<NavigationType> = ({ navigation }) => {
  return (
    <SafeAreaView style={WelcomePage.WelcomePage}>
      <View style={WelcomePage.Container}>

        <Banner iconName="headphones"  ViewStyle={WelcomePage.ViewBanner} IconStyle={WelcomePage.ViewBannerIcon} />

        <TextComponent 
          text="Welcome to MusicApp!" 
          numberOfLines={2} 
          style={WelcomePage.h1} 
        />
        <TextComponent 
          text="Our App is not just a player! Our smart neural network can understand the lyrics, so you can find music by passing them to it." 
          numberOfLines={4} 
          style={WelcomePage.p} 
        />

        <TextButton 
          onPress={() => navigation.navigate('Auth')} 
          buttonText="Login" 
        />
        <IconButton 
          iconName="corner-up-right" 
          onPress={() => navigation.navigate('TabsNavigation')} 
          ViewStyle={WelcomePage.enterBtn} 
          IconStyle={WelcomePage.enterBtnIcon}
        />

      </View>
    </SafeAreaView>
  );
}

export default Welcome;