import React from 'react';
import { Text, View, StyleSheet,} from 'react-native';

interface HeaderProps {
  name: string;
}

const HeaderBlock: React.FC<HeaderProps> = (props) => {
  return (
    <View style={CurrentStyles.header}>
      <Text style={CurrentStyles.headerItems}>{props.name}</Text>
    </View>
  );
}

const CurrentStyles = StyleSheet.create({
  header:{         
    height: 60,  
    flexDirection: 'row',
    alignItems:'flex-end',
    marginBottom: 15,
  },
  headerItems:{
    color: 'rgba(255, 162, 0, 1)',
    paddingLeft: 25,
    fontSize: 23,
    fontWeight: '200',
    // textTransform: 'uppercase'
  },
});

export default HeaderBlock; 
