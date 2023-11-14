import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from '../../hooks/useAuth';

const RequireAuth = ({ allowedRoles }: any) => {
    const { auth }: any = useAuth();
    const location = useLocation();

    console.log('auth ::', auth)
    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth