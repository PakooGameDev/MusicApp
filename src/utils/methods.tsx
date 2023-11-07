
// import * as Yup from 'yup'

// export const validationSchema = Yup.object({
//     email: Yup.string().email().required("Email is a required field"),
//     password: Yup.string().required("Please enter your password").matches(/^.*(?=.{8,30})((?=.*[0-9]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
//     "Password must contain from 8 to 30 characters, one uppercase, one number"),
// });

export const convertDuration = (duration: number): string => {
    const minutes = Math.floor(duration / 60000); // 1 минута = 60 000 миллисекунд
    const seconds = Math.floor((duration % 60000) / 1000); // 1 секунда = 1000 миллисекунд
  
    const minutesString = minutes < 10 ? `${minutes}` : String(minutes);
    const secondsString = seconds < 10 ? `0${seconds}` : String(seconds);
  
    return `${minutesString}:${secondsString}`;
}
