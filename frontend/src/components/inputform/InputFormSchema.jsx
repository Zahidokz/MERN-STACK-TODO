import * as yup from 'yup'

export const inputFormSchema = yup.object({
    name:yup.string().min(3).max(20).required("Name is must"),
    age: yup.number().min(18).max(100).required('Age is must'),
    email: yup.string().email().required("Email is must"),
})