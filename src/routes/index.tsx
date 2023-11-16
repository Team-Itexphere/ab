import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import Layout from './layout';

import LoginScreen from '../pages/Login/login.screen';
import HomeScreen from '../pages/Home/home.screen';
import RequireAuth from '../utils/validation/RequireAuth';
import DisbursementScreen from '../pages/Disbursement/disbursement.screen';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* public routes */}
                <Route path="login" element={<LoginScreen />} />

                {/* we want to protect these routes */}
                <Route element={<RequireAuth />}>
                    <Route path='/' element={<HomeScreen />} />
                </Route>

                <Route element={<RequireAuth />}>
                    <Route path='/Disbursement/EmployeeDisbursementsGrid' element={<DisbursementScreen />} />
                </Route>
                {/* catch all */}
            </Route>
        </Routes>
    )
}

export default MainRoutes