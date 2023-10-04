import React, { useRef } from 'react';
import { Text,View } from 'react-native';
import { Feather } from  '@expo/vector-icons'
import { styles } from '../../../../styles'


export const Title: React.FC = (props) => {
    return (
        <View style={styles.title}>
            <Text style={styles.titleItems}>{props.title}</Text>
            <Feather name='chevron-right'color='rgba(255, 162, 0, 1)' size={20}/>
        </View>
    );
  }

