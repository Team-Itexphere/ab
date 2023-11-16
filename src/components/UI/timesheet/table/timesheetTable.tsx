import React from 'react'

import { useNavigate } from 'react-router-dom';

type Props = {
    summary: any
}

const TimesheetTable = ({ summary }: Props) => {

    const navigate = useNavigate();

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th >TimesheetLineID</th>
                        <th>Comment</th>
                        <th>EmployeeName</th>
                        <th>JobCode</th>
                        <th>EmployeeID</th>
                        <th>Disbursement</th>
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
                            <td >
                                <div onClick={() => navigate(`/Disbursement/EmployeeDisbursementsGrid?timesheetID=${item.TimesheetLineID}`)} className='flex justify-center items-center'>
                                    <img
                                        src="https://www.svgrepo.com/download/106835/refund.svg"
                                        alt="disb"
                                        className='w-5 h-5'
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TimesheetTable