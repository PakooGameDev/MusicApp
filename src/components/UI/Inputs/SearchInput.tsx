import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../../styles/styles';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const Search: React.FC<any> = ({ updateSearchQuery }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearchChange = useCallback((text: string) => {
        setSearchQuery(text);
        updateSearchQuery(text);
    }, [updateSearchQuery]);

    return (  
        <View style={styles.searchSection}>
            <View style={{justifyContent:'flex-start', flexDirection: 'row', alignItems:'center'}}>
                <Feather name='search' color='#a1a3a4' style={{fontSize: 24, marginRight: 12, marginLeft:12}}/>
                <TextInput value={searchQuery} onChangeText={handleSearchChange} placeholder='Search' placeholderTextColor='#a1a3a4' />
            </View>
            <TouchableOpacity>
                <Feather name='filter' color='#a1a3a4' style={{ fontSize: 24, marginRight: 12, marginLeft:12 }}/>
            </TouchableOpacity>
        </View>
    );
};


const generateRandomString = (length: number) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const codeVerifier  = generateRandomString(64);

const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);

const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'http://localhost:8080';

const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize")

// generated in the previous step
window.localStorage.setItem('code_verifier', codeVerifier);

const params =  {
  response_type: 'code',
  client_id: clientId,
  scope,
  code_challenge_method: 'S256',
  code_challenge: codeChallenge,
  redirect_uri: redirectUri,
}

authUrl.search = new URLSearchParams(params).toString();
window.location.href = authUrl.toString();

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

const getToken = async code => {

  // stored in the previous step
  let codeVerifier = localStorage.getItem('code_verifier');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  }

  const body = await fetch(url, payload);
  const response =await body.json();

  localStorage.setItem('access_token', response.access_token);
}
