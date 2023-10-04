//-----------------------------------Blocks-------------------------------------------------------------
import HeaderBlock from './Blocks/Header';
import ValidationHeader from './Blocks/HeaderValidation';
import { MusicList } from './Blocks/MusicList';
import  Playlists  from "./Blocks/Playlists";
import  Playlist  from "./Items/Playlist";
import LoginForm from './Blocks/LogInForm';
import SignUpForm from './Blocks/SignUpForm';
//-----------------------------------Items-------------------------------------------------------------
import { CurrentMusic } from './Items/CurrentSong';
//-----------------------------------Inputs-------------------------------------------------------------
import { Search } from './Inputs/search';
//-----------------------------------Text-------------------------------------------------------------
import { Title } from './Text/Title';
import TextComponent from './Text/Text'
//-----------------------------------Buttons-------------------------------------------------------------
import ValidationSelectorBtn from './Buttons/ValidationSelectorBtn';
import  TextButton from './Buttons/TextButton';
import  IconButton from './Buttons/IconButton';
//-----------------------------------Icons-------------------------------------------------------------
import Banner from './Icons/Banner'


export {IconButton, Playlist, TextComponent, TextButton, Banner, HeaderBlock,ValidationSelectorBtn, Playlists, MusicList, CurrentMusic, Search, Title, LoginForm, SignUpForm, ValidationHeader}