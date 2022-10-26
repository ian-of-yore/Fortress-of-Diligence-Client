import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();

    if (loading === true) {
        return <div style={{ minHeight: "80vh" }}><Spinner animation="border" variant="light" /></div>
    }

    if (user?.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;