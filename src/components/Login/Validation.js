import { object, string } from 'yup'
let validations = object({
    email: string().email("Please enter your e-mail address in valid format").required("This field is required"),
    password: string().min(5, "Minimum number of characters 5").required("This field is required")
})
export default validations;