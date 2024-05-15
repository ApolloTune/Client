import axios from 'axios'

const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer '+ localStorage.getItem("token")
        }
    }
    return config
}


const keySearchWithSpotify = async(input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/openai/keysearchrequest`, input, setAuth());
    return response
}

const favoriteSearchWithSpotify = async() => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/openai/favoritesearchrequest`, setAuth())
    return response
}
const sentenceSearchWithSpotify = async(input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/openai/sentencesearchrequest`, input, setAuth())
    return response
}
const fortuneTellingByPlaylist = async(input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/openai/fortunetelling`, input, setAuth())
    return response
}
export {
    keySearchWithSpotify,
    favoriteSearchWithSpotify,
    sentenceSearchWithSpotify,
    fortuneTellingByPlaylist
}