import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    if (loading) {
        return <div className='spinner-body'><div className='loadingspinner'></div></div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
};

export default RequireAuth;