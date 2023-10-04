import React from 'react';
import {StyleSheet ,Text, TouchableOpacity} from 'react-native';

const ValidationSubmitBtn = ({title, submitting, onPress, style, textStyle}) => {

  

return (
    <>
       <TouchableOpacity style={[styles.container, style]} onPress={!submitting ? onPress : null} > 
           <Text style={[styles.title, textStyle]}>{title}</Text>
       </TouchableOpacity>
    </>
)}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 162, 0, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 8,
        
    },
    title: {
        color: 'rgba(28, 27, 74, 1)',
        fontSize: 18,
        fontWeight: 'bold'  
    },
  })

  export default ValidationSubmitBtn;