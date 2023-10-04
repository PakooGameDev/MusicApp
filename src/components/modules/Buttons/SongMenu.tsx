import React,{useState} from 'react';
import { Feather } from  '@expo/vector-icons'
import { View } from 'react-native';
import {styles, triggerStyles,optionsStyles,optionStyles} from '../../../../styles'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { playlist } from '../../Screens/LibraryPage';

export function SongMenu (props) {
        
        function addItem(){
            if(!(playlist[0].data.includes(props.parentItem.Item))){     
                let _item = props.parentItem.Item
                _item.id = props.parentItem.Index
                playlist[0].data.push(_item)
                console.log(playlist[0].data)
            }
        }

        return(
            <Menu>
                <MenuTrigger customStyles={triggerStyles}>
                    <Feather name='more-vertical' style={styles.songMenu}/>
                </MenuTrigger> 
                <MenuOptions customStyles={optionsStyles}>
                <MenuOption onSelect={() => alert(`Not called`)} text='Играть' customStyles={optionStyles} /> 
                    <MenuOption onSelect={() => alert(`Save`)} text='Скачать' customStyles={optionStyles}/>
                    <MenuOption onSelect={() => alert(`Delete`)} text='Сохранить в кэш' customStyles={optionStyles}/>
                    <MenuOption onSelect={() => alert(`Not called`)} text='Показать текст' customStyles={optionStyles} />
                    <MenuOption onSelect={() => alert(`Save`)} text='Искать исполнителя' customStyles={optionStyles}/>
                    <MenuOption onSelect={addItem} text={'Добавить в альбом'} customStyles={optionStyles}/>          
                </MenuOptions>
            </Menu>

        )
};


