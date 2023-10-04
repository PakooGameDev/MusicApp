import {  View,TouchableOpacity,  Image,Text} from 'react-native';
import {styles} from '../styles.js'
import { SongMenu } from '../Buttons/SongMenu';

export function Song (props) {
return(
    <View style={styles.songItem}>
        <TouchableOpacity style={styles.songMeta} >
            <Image style={styles.songLogo} source={props.parentItem.Item.thumbnail}/>
            <View style={{marginLeft:10,width:250}}>
                <Text numberOfLines={1} style={styles.songTitle}>{props.parentItem.Item.title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text numberOfLines={1} style={styles.songLong}>{props.parentItem.Item.long}</Text>
                    <Text numberOfLines={1} style={styles.songAuthor}>{props.parentItem.Item.author}</Text>
                </View>  
            </View>
        </TouchableOpacity>
        <SongMenu parentItem={props.parentItem}/>
    </View>
)};


