import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

import './index.css'
const HomeScreen = () => {
    const navigate = useNavigate();

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
    }, [])

    if (summary.length === 0) return <h1>Loarding... or No Data to Display</h1>
    return (
        <table>
            <thead>
                <tr>
                    <th >TimesheetLineID</th>
                    <th>Comment</th>
                    <th>EmployeeName</th>
                    <th>JobCode</th>
                    <th>EmployeeID</th>

                </tr>
            </thead>
            <tbody>
                {summary.map((item: any) => (
                    <tr key={item.TimesheetLineID} >
                        <td >{item.TimesheetLineID}</td>
                        <td >{item.Comment}</td>
                        <td >{item.Employee.EmployeeName}</td>
                        <td >{item.Job.JobCode}</td>
                        <td >{item.Employee.EmployeeID}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default HomeScreen