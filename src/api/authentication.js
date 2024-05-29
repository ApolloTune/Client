import axios from 'axios'
const signUp = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`, input);
    return response
}

const loginIn = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`, input);
    return response
}

export{
    signUp,
    loginIn,
}