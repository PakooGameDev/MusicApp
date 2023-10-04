import React from 'react';
import { styles } from '../../../../styles';
import { Text, View } from 'react-native';

interface HeaderProps {
  name: string;
}

const HeaderBlock: React.FC<HeaderProps> = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerItems}>{props.name}</Text>
    </View>
  );
}

export default HeaderBlock; 
