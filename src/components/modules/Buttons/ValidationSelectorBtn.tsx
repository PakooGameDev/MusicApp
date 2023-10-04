import React from 'react';
import { StyleSheet, Text, Animated, Pressable , ViewStyle } from 'react-native';

interface ValidationSelectorBtnProps {
  title: string;
  backgroundColor: string;
  style?: ViewStyle;
  onPress: () => void;
}

const ValidationSelectorBtn: React.FC<ValidationSelectorBtnProps> = ({
  title,
  backgroundColor,
  style,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
        <Animated.View style={[styles.container, style, { backgroundColor }]}>
            <Text style={styles.title}>{title}</Text>
        </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ValidationSelectorBtn;