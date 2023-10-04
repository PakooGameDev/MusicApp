import React from 'react';
import ValidationSubmitBtn from '../Buttons/ValidationSubmitBtn';
import ValidationContainer from './ValidationContainer';
import ValidationTextInput from '../Inputs/ValidationTextInput';
import { validationSchema } from '../../utils/methods';
import {callApi} from '../../utils/Dispatcher';
import {Formik} from 'formik'


const SignUpForm: React.FC = () => {  

    const userInfo = {
        email: '',
        password: '',
    }

    const SignUp = (values, formikActions) => { 
        callApi(0, '', {
            email: values.email,
            password: values.password ,
        })
        formikActions.resetForm();
        formikActions.setSubmitting(false); 
    }   

    return (
    <ValidationContainer>  
        <Formik initialValues={userInfo} validationSchema={validationSchema} onSubmit={SignUp}>
            {({values, isSubmitting, handleChange, errors, handleBlur, touched, handleSubmit}) => {
            const {email, password} = values
            return <>
                <ValidationTextInput 
                    value={email} 
                    onChangeText={handleChange('email')} 
                    placeholder='Email'
                    onBlur={handleBlur('email')}
                    error={touched.email && errors.email}
                />
                <ValidationTextInput
                    value={password} 
                    onChangeText={handleChange('password')} 
                    secureTextEntry={true}
                    placeholder='Password'
                    onBlur={handleBlur('password')}
                    error={touched.password && errors.password} 
                />

                <ValidationSubmitBtn
                    onPress={handleSubmit} 
                    title='Sign Up' 
                    style={{marginTop: 30,}}
                    submitting={isSubmitting}  
                />
            </>
            }}
        </Formik>
    </ValidationContainer>
)}

export default SignUpForm;

