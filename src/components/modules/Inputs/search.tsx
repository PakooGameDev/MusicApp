import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity,Modal} from 'react-native';
import { Feather } from  '@expo/vector-icons'
import {styles} from '../styles.js'
  


export function Search(props) {
    const [text, setText] = React.useState();
    return (
        <View elevation={7}  style={styles.searchSection}>
        <View style={{justifyContent:'flex-start', flexDirection: 'row',  alignItems:'center',}}>
            <Feather name='search' color='#a1a3a4' style={{fontSize: 24,marginRight: 12, marginLeft:12,}}/>
            <TextInput value={text} 
                onChangeText={setText} 
                placeholder='Search' 
                placeholderTextColor='#a1a3a4'
                width={250} >
            </TextInput>
        </View>
        <TouchableOpacity>
            <Feather name='filter' color='#a1a3a4' style={{ fontSize: 24,marginRight: 12, marginLeft:12,}}/>
        </TouchableOpacity>
        <Modal visible={false}>
            <View style={styles.filter}>

            </View>
        </Modal>
    </View>
    );
  }

