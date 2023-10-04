import { NavigationProp, ParamListBase } from '@react-navigation/native';

export type MusicItem = {
    id: string;
    title: string;
    author: string;
    thumbnail: object | any;
    long: string;
}

export type PlaylistItem = {
    id: string;
    title: string;
    author: string;
    thumbnail: object | any;
    data: MusicItem[];
}

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
