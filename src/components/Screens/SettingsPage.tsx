import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Platform, StatusBar} from 'react-native';
import { Feather } from  '@expo/vector-icons'

export  function Settings() {
    return (
        <SafeAreaView style={styles.container}>
          <View  style={styles.header}>
              <Feather name='settings' style={styles.headerItems} />
              <Text style={styles.headerItems}>Settings</Text>
          </View>
        </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212529',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header:{         
      width: '100%',
      alignSelf: 'center',     
      height: 60,  
      backgroundColor: '#2a2e32',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems:'center',
  },
  headerItems:{
      color: '#a1a3a4',
      paddingLeft: 25,
      fontSize: 18,
  },
  });