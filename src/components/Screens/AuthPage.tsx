import React, {useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Animated
} from 'react-native';
import {ValidationHeader,ValidationSelectorBtn,LoginForm,SignUpForm} from '../modules/index';

const {width} = Dimensions.get('window');

export function Auth ({ navigation }) {
  const animation = useRef(new Animated.Value(0)).current
  const scrollView = useRef()
  
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
  return (
  <View style={{flex:1, paddingTop:90, backgroundColor: '#212529',}}>
    <View style={{height: 70}}>
      <ValidationHeader 
        leftHeading='Welcome' 
        rightHeading='Back' 
        subHeading='Have a nice day with us!' 
        rho={rho}
        rhtY={rhtY}
        lhtX={lhtX}
      />
    </View>
    <View style={{flexDirection: 'row',padding: 25 ,  marginTop: 40,}}>
      <ValidationSelectorBtn style={styles.borderLeft} backgroundColor={loginColorInterpolate} title='Login' onPress={() =>  scrollView.current.scrollTo({x: 0})}/>
      <ValidationSelectorBtn style={styles.borderRight} backgroundColor={SignUpColorInterpolate} title='Sign Up' onPress={() =>  scrollView.current.scrollTo({x: width})}/>
    </View>
    <ScrollView 
      ref={scrollView}
      horizontal 
      pagingEnabled 
      showHorizontalScrollIndicator={false} 
      scrollEventThrottle={16} 
      onScroll={Animated.event( [{ nativeEvent: {contentOffset: {x: animation} } }], {useNativeDriver: false} )}
    >
      <LoginForm navigation={navigation}/>
      <ScrollView>
          <SignUpForm/>
      </ScrollView>
    </ScrollView>
  </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    borderLeft:{
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        
    },
    borderRight:{
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    }
  })