import { createContext, useState, useContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);

    const Login = async (response) => {
        setToken(response.token);
        localStorage.setItem("token", response.token);
        setLoggedIn(true);
    }
    const Logout = () => {
        setLoggedIn(false);
        localStorage.removeItem("token");
        window.location.href = "/";
    }    
    const values = {
        loggedIn,
        setLoggedIn,
        token,
        setToken,
        Login,
        Logout
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext)
export{
    AuthProvider,
    useAuth
}