import React, { Suspense, lazy } from 'react'
import { Routes, Route, } from 'react-router-dom';
import { Spin } from 'antd';
import Layout from './layout';


const LoadingComponent = () =>
    <Spin className='fixed top-0 left-0 z-[1301] w-full' />



// import LoginScreen from '';
// import HomeScreen from '../pages/Home/home.screen';
// import RequireAuth from '../utils/validation/RequireAuth';
// import DisbursementScreen from '../pages/Disbursement/disbursement.screen';


// project imports
// import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) =>
(
    <Suspense fallback={<LoadingComponent />}>
        <Component {...props} />
    </Suspense>
);

// export default Loadable;

const MainRoutes = () => {

    const LoginScreen = Loadable(lazy(() => import('../pages/Login/login.screen')))
    const HomeScreen = Loadable(lazy(() => import('../pages/Home/home.screen')))
    const RequireAuth = Loadable(lazy(() => import('../utils/validation/RequireAuth')))
    const DisbursementScreen = Loadable(lazy(() => import('../pages/Disbursement/disbursement.screen')))
    const WorkScheduleScreen = Loadable(lazy(() => import('../pages/workSchedule/workSchedule.screen')))

    return (
        <Routes>

            <Route path='/' element={<Layout />}>

                <Route path="work-scheduling" element={<WorkScheduleScreen />} />
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