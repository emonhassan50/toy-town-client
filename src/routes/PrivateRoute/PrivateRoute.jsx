import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import './PrivateRoute.css'

const PrivateRoute = ({children}) => {
        const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="loader mx-auto"></div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
   
};

export default PrivateRoute;