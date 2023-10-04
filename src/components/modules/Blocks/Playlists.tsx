import { FlatList } from 'react-native';
import { Playlist } from '../Items/Playlist';

const playlist = [
    {
        id: '001',
        title: "Playlist",
        author: 'FFDP',
        thumbnail: require('../../../../assets/songLogo.jpg'),
        data: [
            {
                id: '001',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
                author: 'FFDP',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '002',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears",
                author: 'Sabaton',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
        ],
    },
    {
      id: '002',
        title: "Playlist",
        author: 'FFDP',
        thumbnail: require('../../../../assets/songLogo.jpg'),
        data: [
            {
                id: '001',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
                author: 'FFDP',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '002',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears",
                author: 'Sabaton',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '003',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
                author: 'FFDP',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '004',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears",
                author: 'Sabaton',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '005',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
                author: 'FFDP',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '006',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears",
                author: 'Sabaton',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
                        {
                id: '007',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
                author: 'FFDP',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '008',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears",
                author: 'Sabaton',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
        ],
    },
    {
      id: '003',
        title: "Playlist",
        author: 'FFDP',
        thumbnail: require('../../../../assets/songLogo.jpg'),
        data: [
            {
                id: '001',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears ",
                author: 'FFDP',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
            {
                id: '002',
                title: "Save Save Your Tears Save Your Tears Save Your  Tears",
                author: 'Sabaton',
                thumbnail: require('../../../../assets/songLogo.jpg'),
                long: '4:54'
            },
        ],
    },
  ]

export function Playlists(props) {
    const _renderItem = ({ item, index }) => (
        <Playlist
            Item={item}
            Screen={props.Screen}
            data={playlist}
            index={index}
            navigation={props.navigation}
        />
    );
    return (
        <FlatList keyExtractor={(item) => item.id}
        
            horizontal
            showsHorizontalScrollIndicator={false}
            data={playlist}
            renderItem={_renderItem} />
    );
}
