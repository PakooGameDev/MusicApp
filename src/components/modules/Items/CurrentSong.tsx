import {  View, TouchableOpacity, Image,Text} from 'react-native';
import { Feather } from  '@expo/vector-icons'
import {styles} from '../styles.js'


const data =    {
        id: '001',
        name: "Save Your Tears Save Your Tears Save Your Tears Save Your Tears Save Your Tears Save Your Tears",
        author: 'FFDP',
        thumbnail: require('../../../../assets/songLogo.jpg'),
        long: '4:54'
    }


export function CurrentMusic ({ name, author, navigation }) {
    return  (
        <View  style={styles.CurrentMusic} >
            <TouchableOpacity  style={styles.CurrentInfo} onPress={()=>{navigation.navigate('Player')}}>
                <Image style={{height:50,width:50,borderRadius:5,}} source={data.thumbnail}/>
                <View style={{marginLeft:10,width:200}}>
                    <Text numberOfLines={1} style={styles.songTitle}>{data.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text numberOfLines={1} style={styles.songLong}>{data.long}</Text>
                        <Text numberOfLines={1} style={styles.songAuthor}>{data.author}</Text>
                    </View>  
                </View>
            </TouchableOpacity>
            <View style={styles.CurrentButtons}>
                <TouchableOpacity>
                    <Feather name='play' style={styles.CurrentPlayer}/>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Feather name='x' style={styles.CurrentPlayer}/>
                </TouchableOpacity> 
            </View>
        </View>
    );
}
