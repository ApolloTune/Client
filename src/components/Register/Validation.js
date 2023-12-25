import { object, string, ref } from 'yup'
let validations = object({
    name: string().required("This field is required"),
    userName: string().required("This field is required"),
    email: string().email("Please enter your e-mail address in valid format").required("This field is required"),
    password: string().min(5, "Minimum charecter count is 5").required("This field is required"),
    passwordRepeat: string().oneOf([ref('password')], "Please enter your same password").required("This field is required")
})
export default validations;