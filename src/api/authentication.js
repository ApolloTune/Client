import axios from 'axios'
const register = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`, input);
    return response
}

const login = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`, input);
    return response
}

export{
    register,
    login,
}