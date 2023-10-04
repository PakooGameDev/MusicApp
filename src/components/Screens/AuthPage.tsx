import React, { useRef } from 'react';
import { ScrollView, View, Dimensions, Animated } from 'react-native';
import {SignUpForm, LoginForm, ValidationHeader, ValidationSelectorBtn} from '../modules/index';
import {AuthStyles} from '../../../styles'

const { width } = Dimensions.get('window');

interface AuthProps {
  navigation: any; // Замените any на соответствующий тип навигации
}

const Auth: React.FC<AuthProps> = ({ navigation }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef<ScrollView>(null); 

  const rho = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });
  const lhtX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rhtY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const SignUpColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(255, 162, 0, 0.01)', 'rgba(255, 162, 0, 1)'],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(255, 162, 0, 1)', 'rgba(255, 162, 0, 0.01)'],
  });

  const handleLoginPress = () => {
    if (scrollView.current) {
      scrollView.current.scrollTo({ x: 0 });
    }
  };

  const handleSignUpPress = () => {
    if (scrollView.current) {
      scrollView.current.scrollTo({ x: width });
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 90, backgroundColor: '#212529' }}>
      <View style={{ height: 70 }}>
        <ValidationHeader
          leftHeading="Welcome"
          rightHeading="Back"
          subHeading="Have a nice day with us!"
          rho={rho}
          rhtY={rhtY}
          lhtX={lhtX}
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 25, marginTop: 40 }}>
        <ValidationSelectorBtn
          style={AuthStyles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title="Login"
          onPress={handleLoginPress}
        />
        <ValidationSelectorBtn
          style={AuthStyles.borderRight}
          backgroundColor={SignUpColorInterpolate}
          title="Sign Up"
          onPress={handleSignUpPress}
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <LoginForm navigation={navigation} />
        <SignUpForm />
      </ScrollView>
    </View>
  );
};


export default Auth;