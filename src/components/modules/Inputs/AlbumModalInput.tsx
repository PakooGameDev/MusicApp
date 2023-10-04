import React from 'react';
import { Modal, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export function AlbumModalInput(props) {
    return (
    <Modal
        transparent={true}
        visible={props.visibility}
    >
        <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', backgroundColor: '#212529', height: 200, width: 300 , elevation:10,marginTop:150,}}>
        
            <Text style={{fontWeight: '300',  fontSize: 16,  color:'#d9dce2',marginVertical:20,}}>Give a name for your album</Text>
            <TextInput onChangeText={(value) => props.handleOnChangeText(value)} placeholder='Name' style={{borderBottomWidth:2,borderColor:'rgba(255, 162, 0, 1)',width:'90%',height:40,}}/>
            <TouchableOpacity title='Apply' style={{marginVertical:20,backgroundColor:'rgba(255, 162, 0, 1)', borderRadius:25,height:40,width:150,justifyContent:'center',alignItems:'center'}} onPress={props.state}>
                <Text>Apply</Text>
            </TouchableOpacity>

        </View>
    </Modal>
    );
}
