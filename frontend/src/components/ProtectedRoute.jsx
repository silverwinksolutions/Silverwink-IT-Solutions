// src/components/ProtectedRoute.jsx

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContextProvider";

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AppContext);

    if (!token) {
        
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
