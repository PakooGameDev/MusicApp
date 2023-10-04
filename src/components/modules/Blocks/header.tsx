import { Feather } from  '@expo/vector-icons'
import {styles} from '../styles.js'
import {Text, View, Animated} from 'react-native';


export function Header(props) {
    return (
    <View style={styles.header}>
        <Text style={styles.headerItems}>{props.name}</Text>
    </View>
    );
}

 export const ValidationHeader = ({leftHeading, rightHeading, subHeading, lhtX = 40, rhtY = -20, rho = 0}) => {
      return (
          <>
              <View style={styles.ValidationContainer}>
                  <Animated.Text style={[styles.heading, {transform: [{translateX: lhtX}]} ]}>{leftHeading}</Animated.Text>
                  <Animated.Text style={[styles.heading, {opacity: rho, transform: [{translateY: rhtY}] } ]}>{rightHeading}</Animated.Text>
              </View>
              <View style={styles.ValidationContainer}>
                  <Text style={styles.subHeading}>{subHeading}</Text>
              </View>
          </>
      )    
  }

