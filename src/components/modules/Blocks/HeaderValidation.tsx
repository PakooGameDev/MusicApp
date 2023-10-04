import React from 'react';
import { styles } from '../../../../styles';
import { Text, View, Animated } from 'react-native';

interface ValidationHeaderProps {
    leftHeading: string;
    rightHeading: string;
    subHeading: string;
    lhtX?:  number;
    rhtY?: number;
    rho?: number;
  }
  
const ValidationHeader: React.FC<ValidationHeaderProps> = ({
    leftHeading,
    rightHeading,
    subHeading,
    lhtX = 40,
    rhtY = -20,
    rho = 0,
  }: ValidationHeaderProps) => {
    return (
      <>
        <View style={styles.ValidationContainer}>
          <Animated.Text style={[styles.heading, { transform: [{ translateX: lhtX }] }]}>{leftHeading}</Animated.Text>
          <Animated.Text style={[styles.heading, { opacity: rho, transform: [{ translateY: rhtY }] }]}>{rightHeading}</Animated.Text>
        </View>
        <View style={styles.ValidationContainer}>
          <Text style={styles.subHeading}>{subHeading}</Text>
        </View>
      </>
    );
  };

  export default ValidationHeader;