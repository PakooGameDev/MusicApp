import React from 'react';
import {StyleSheet ,TextInput, View, Text} from 'react-native';

const ValidationTextInput = (props) => {
const {placeholder, onChangeText, secureTextEntry, error} = props
return ( 
    <View>
        {error ? <Text style={{
            color: 'red',
            fontSize: 15, 
            textAlign: 'center', 
            paddingHorizontal:20 ,
            marginBottom: -5, 
            marginTop: -16
    }}>{error}</Text>: null}
        <TextInput {...props} style={styles.input} placeholderTextColor='#828282' autoCapitalize="none"/>
    </View>
)}

const styles = StyleSheet.create({

    input: {
        height: 55,
        backgroundColor: '#2a2e32', // borderWidth: 1,
       elevation:10,
        // borderColor: 'orange',
        borderRadius: 30,
        margin:6,
        marginBottom: 20,
        paddingHorizontal: 20,
        color: 'white',
        fontSize: 18,
      },
  })

  export default ValidationTextInput;