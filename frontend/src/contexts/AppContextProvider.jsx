import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const navigate = useNavigate();

    // Auth token state
    const [token, setToken] = useState(localStorage.getItem("token") || "");


    // Logout function
    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
        toast.info("Logged out successfully");
        navigate("/login");
    };

    const value = {
        token,
        setToken,
        logout,
        navigate,
        // add other state and functions here as needed
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
