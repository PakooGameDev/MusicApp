import React, {useState} from 'react';
import {Text } from 'react-native';
import ValidationSubmitBtn from '../Buttons/ValidationSubmitBtn';
import ValidationContainer from './ValidationContainer';
import ValidationTextInput from '../Inputs/ValidationTextInput';

import {callApi} from '../../utils/Dispatcher';

const LoginForm: React.FC = (props) => {  

    const [error, setError] = useState('')   
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const {email, password} = userInfo

    const handleOnChangeText = (value, fieldName) => { 
        setUserInfo({...userInfo, [fieldName]: value})
    }

    function GoNext(navigation){
        navigation.navigate('NavStack')
    }

    const Login = () => {
        callApi(6, '', userInfo);
        GoNext(props.navigation)
    }

    return (
    <ValidationContainer>
        <ValidationTextInput 
            value={email}
            placeholder='Email'
            autoCapitalize="none"
            onChangeText={(value) => handleOnChangeText(value, 'email')}
        />
        <ValidationTextInput
            value={password}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(value) => handleOnChangeText(value, 'password')}
        />
        {error ? <Text style={{color: 'red', fontSize: 18, textAlign: 'center', paddingHorizontal:20 ,marginBottom: -15, marginTop: -9  }}>{error}</Text>: null}
        <ValidationSubmitBtn
            onPress={Login} 
            title='Log In'
            style={{marginTop: 70,}}
        /> 
        <ValidationSubmitBtn
            title='Forget Password ?'
            style={{marginTop: 3, backgroundColor: 'white',  backgroundColor: '#212529',}}
            textStyle={{color: 'orange'}}
        />
    </ValidationContainer>
)}

export default LoginForm;