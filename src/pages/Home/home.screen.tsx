import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

// UI components
import Header from '../../components/UI/header/header';
import Navbar from '../../components/UI/navbar/navbar';
import TimesheetTable from '../../components/UI/timesheet/table/timesheetTable';

import './index.css'

const HomeScreen = () => {
    const navigate: any = useNavigate();

    const { auth, setAuth }: any = useAuth();

    const [summary, setSummary] = useState([])

    useEffect(() => {
        const submit = () => {

            const apiUrl = `https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/Timesheet/GetTimesheetLinesByEmployee?employeeid=8734&filter=Date[e]'27-September-2023'`;

            const headers = {
                Authorization: `Bearer ${auth?.accessToken}`,
            };

            axios.get(apiUrl, { headers })
                .then(response => {
                    // Handle the response here
                    console.log('Response GetTimesheetLinesByEmployee ::', response.data);
                    setSummary(response.data)
                })
                .catch(error => {
                    // Handle errors here
                    console.error('Error:', error);
                    setAuth({});
                    navigate('/login');
                });
        }

        submit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (summary.length === 0) return <h1>Loarding... or No Data to Display</h1>
    return (
        <div>
            {/* App Header */}
            <Header />
            <Navbar />


            {/* <div className="relative inline-block text-center">

                <select
                    id="dropdown"
                    className="block appearance-none bg-white px-4 py-2 rounded  leading-tight focus:outline-none focus:shadow-outline text-center"
                >
                    <option disabled selected hidden>Select an option</option>
                    <option className="option-style">Email Notification</option>
                    <option className="option-style">Management</option>
                </select>
            </div> */}

            <div className='flex justify-between items-center p-5'>
                <div>
                    <p className='text-xl font-bold text-[#C1D82F]'>Timesheets for: Shereen Fathima</p>
                </div>
                <div className='flex items-center'>
                    {/* <div className=''> */}
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645]'>Print Disbursements</p>
                    {/* </div> */}
                    {/* <div className='px-3 border-2 border-[#C1D82F]'> */}
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Print Timesheet</p>
                    {/* </div> */}
                    {/* <div className='px-3 border-2 border-[#C1D82F]'> */}
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Commit/uncommit Timesheets</p>
                    {/* </div> */}
                    {/* <div className='px-3 border-2 border-[#C1D82F]'> */}
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Add New Timesheet</p>
                    {/* </div> */}

                </div>
            </div>

            {/* Table */}
            <TimesheetTable summary={summary} />
        </div>

    );
}

export default HomeScreen