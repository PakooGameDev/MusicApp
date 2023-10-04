import React,{useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View,Text, TouchableOpacity,} from 'react-native';
import { HeaderBlock, Search, MusicList, Albums} from '../modules/index';
import {styles} from '../../../styles'
import { Album } from '../modules/Items/Album';

import { Feather } from  '@expo/vector-icons'
import { AlbumModalInput } from '../modules/Inputs/AlbumModalInput';

export let playlist = [
  {
      id: '001',
      title: "All Songs",
      data: [
        
      ],
  },
]

export const Library : React.FC = ({navigation}) => {

  useEffect(() => {
    setListData(playlist[0].data)
  });

  const [visibility,setVisibility] = useState(false)
  const [active,setActive] = useState(0)
  const [listData,setListData] = useState(playlist[0].data)

  const [value, setValue] = useState()

  const handleOnChangeText = (value) => { 
      setValue(value)
  }

  function CreateAlbum (value) {
    if(value){
      playlist.push({
        id: new Date(),
        title: value,
        data: []
      })
      setValue()
    }
  }

    return (
      <SafeAreaView style={styles.container}>
        <AlbumModalInput handleOnChangeText={handleOnChangeText} visibility={visibility} state={()=>{setVisibility(false),CreateAlbum(value)}}/>
        <HeaderBlock  name='Library'/>
        <View style={{marginBottom: 20}}><Search/></View>
        <View style={{marginBottom: 20}}>
          <ScrollView style={{marginRight:20,}} horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginLeft:20,}}>
                <TouchableOpacity  onPress={()=>{setVisibility(true)}}>
                    <View  style={{height:105,width:105, borderRadius:10, borderWidth:2,borderColor:'rgba(255, 162, 0, 1)',backgroundColor: '#2a2e32',justifyContent: 'center',alignItems: 'center',}}>
                        <Feather name='plus' style={{ color: 'rgba(255, 162, 0, 1)',fontSize:55, }}/>
                    </View>
                    <Text numberOfLines={1} style={{fontWeight: '300',  fontSize: 16,  marginLeft:5, color:'#d9dce2',width:100}}>Add</Text>
                </TouchableOpacity>
            </View>
            {playlist.map((item,key) => (
                <Album active={active} index={key} onPress={()=>{setListData(item.data),setActive(key)}} key={key} songs={item.data.length} title={item.title} />
            ))} 
          </ScrollView>
        </View>
        <MusicList data={listData} />
      </SafeAreaView>
    );
  }
  
 
