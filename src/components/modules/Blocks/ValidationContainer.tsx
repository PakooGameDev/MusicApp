import React from 'react';
import {StyleSheet, KeyboardAvoidingView,  Dimensions, Platform} from 'react-native';

const ValidationContainer = ({children}) => {
    return (
        <KeyboardAvoidingView 
            enabled 
            behavior={Platform.OS === 'ios' ? 'padding': null} 
            style={styles.container}>{children}
        </KeyboardAvoidingView>
    )    
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        marginTop: 40,
        backgroundColor: '#212529',
    },
  })

  export default ValidationContainer;