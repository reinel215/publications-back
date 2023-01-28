import * as yup from 'yup';

//     status VARCHAR(10) CHECK (status IN ('drafted', 'deleted', 'published')),



export const CreatePostScheme = yup.object().shape({
    image: yup.string(),
    message: yup.string().required('"message" is required').max(500, 'max of 500 lenght in "surname"'),
    location: yup.string().required('"location" is required').max(20, 'max of 20 lenght in "location"'),
    status: yup.string().required('"status" is required').max(10, 'max of 10 lenght in "status"').oneOf(["drafted", "deleted", "published"], 'status only accpets "drafted", "deleted", "published"'),
})