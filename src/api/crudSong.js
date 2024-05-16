import axios from 'axios'

const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer '+ localStorage.getItem("token")
        }
    }
    return config
}

const addFavoriteSong = async (input) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/song/addfavoritesong`, input, setAuth());
    return response
}
const getFavoriteSongs = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/song/getfavoritesongs`, setAuth());
    return response
}
const deleteFavoriteSong = async (input) => {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/song/deletefavoritesong`, { ...setAuth(), data: input });
    return response
}

export{
    addFavoriteSong,
    getFavoriteSongs,
    deleteFavoriteSong
}