
import * as Yup from 'yup'


export const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is a required field"),
    password: Yup.string().required("Please enter your password").matches(/^.*(?=.{8,30})((?=.*[0-9]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain from 8 to 30 characters, one uppercase, one number"),
});

