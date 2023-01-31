import * as yup from 'yup';

export const SignupRequestSchema = yup.object().shape({
    name: yup.string().required('"name" is required').max(50, 'max of 50 lenght in "name"'),
    surname: yup.string().required('"surname" is required').max(50, 'max of 50 lenght in "surname"'),
    avatar: yup.string(),
    username: yup.string().required('"username" is required').max(50, 'max of 50 lenght in "name"'),
    role: yup.string().required('"role" is required').oneOf(['admin','user'], 'Role only accepts "admin" or "user'),
})