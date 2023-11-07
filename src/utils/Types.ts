import { NavigationProp, ParamListBase } from '@react-navigation/native';

export type MusicItem = {
    id: string;
    title: string;
    author: string;
    thumbnail: string | any;
    long: string;
}

export type PlaylistItem = {
    id: string;
    title: string;
    author: string;
    thumbnail: string | any;
    data: MusicItem[];
}

// export type SpotifyItem = {
//     "album": {},
//     "artists": [],
//     "available_markets": [],
//     "disc_number": number,
//     "duration_ms": number,
//     "explicit": false,
//     "external_ids": {},
//     "external_urls": {},
//     "href": string,
//     "id": string,
//     "is_local": boolean,
//     "name": string,
//     "popularity": number,
//     "preview_url": string,
//     "track_number": number,
//     "type": string,
//     "uri": string
// }

export type TabsParamList = {
    Home: React.FC;
    Library: React.FC;
    Settings: React.FC;
};

export type MainStackParamList = {
    Welcome: React.FC;
    Auth: React.FC;
    TabsNavigation: React.FC;
    Player: React.FC;
    PlaylistScreen: React.FC;
};


export type NavigationType = {
    navigation: NavigationProp<ParamListBase>;
}
