import axios from 'axios'
const signUp = async (input) => {
    const response = await axios.post(`server-production-10b1.up.railway.app/api/v1/auth/register`, input);
    return response
}

const loginIn = async (input) => {
    const response = await axios.post(`server-production-10b1.up.railway.app/api/v1/auth/login`, input);
    return response
}

export{
    signUp,
    loginIn,
}