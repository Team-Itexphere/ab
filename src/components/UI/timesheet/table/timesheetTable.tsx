import React from 'react'

type Props = {
    summary: any
}

const TimesheetTable = ({ summary }: Props) => {
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
        </div>
    )
}

export default TimesheetTable