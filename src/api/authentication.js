import axios from 'axios'
const signUp = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`, input);
    return response
}

const loginIn = async (input) => {
    let apiUrl = process.env.REACT_APP_BASE_ENDPOINT
    if (apiUrl.startsWith('"') && apiUrl.endsWith('"')) {
        apiUrl = apiUrl.substring(1, apiUrl.length - 1);
      }
    const response = await axios.post(`${apiUrl}/auth/login`, input);
    return response
}

export{
    signUp,
    loginIn,
}