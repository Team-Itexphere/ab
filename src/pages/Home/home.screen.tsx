import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

// UI components
import Header from '../../components/UI/header/header';
import Navbar from '../../components/UI/navbar/navbar';
import TimesheetTable from '../../components/UI/timesheet/table/timesheetTable';
import DisbursementScreen from '../Disbursement/disbursement.screen';
import DrawerComponent from '../../components/common/Drawer/drawerComponent';

import './index.css'

import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const HomeScreen = () => {
    const navigate: any = useNavigate();

    const { auth, setAuth }: any = useAuth();

    const [summary, setSummary] = useState([])
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const dateFormat = 'YYYY/MM/DD';
    useEffect(() => {
        const submit = () => {

            const apiUrl = `https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/Timesheet/GetTimesheetLinesByEmployee?employeeid=8734&filter=Date[e]'27-September-2023'`;
            const apiUrl1 = `https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/Timesheet/GetTimesheetLinesByEmployee?employeeid=8734&filter=Date[e]'${formatDate(selectedDate)}'`;

            console.log('apiUrl1', apiUrl1)
            const headers = {
                Authorization: `Bearer ${auth?.accessToken}`,
            };

            axios.get(apiUrl1, { headers })
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

        // const TimesheetLineSummary: any = [
        //     {
        //         "TimesheetLineID": 72369418,
        //         "Date": "2023-09-27T00:00:00",
        //         "StartTime": "2023-09-27T17:59:00",
        //         "StopTime": "2023-09-27T18:25:00",
        //         "NoOfUnits": 0.43,
        //         "UnitConversion": 1,
        //         "ChargeRate": 190,
        //         "Comment": "Gh",
        //         "LinkTimesheet_SignOff": null,
        //         "TimesheetPeriod": {
        //             "TimesheetID": 5043073,
        //             "WeekEndingDate": "2023-09-27T00:00:00",
        //             "Committed": false
        //         },
        //         "Employee": {
        //             "EmployeeID": 8734,
        //             "EmployeeCode": null,
        //             "EmployeeName": "Shereen Fathima"
        //         },
        //         "Client": {
        //             "ClientID": 92847,
        //             "ClientCode": "192",
        //             "ClientAbbreviation": "Cato",
        //             "ClientName": "Cato Bolam"
        //         },
        //         "Job": {
        //             "JobID": 145524,
        //             "JobCode": "192-006",
        //             "JobDescription": "Cato Abtrac"
        //         },
        //         "TaskGroup": null,
        //         "Task": {
        //             "TaskID": 2296105,
        //             "TaskDescription": "Training"
        //         },
        //         "Activity": {
        //             "ActivityID": 17396,
        //             "ActivityName": "120 Paid Work for a Specific Client"
        //         },
        //         "WorkItem": null,
        //         "Invoice": null,
        //         "Locked": false,
        //         "LockedReason": null,
        //         "LogInfo": {
        //             "VersionID": 123
        //         },
        //         "ChargeType": {
        //             "ChargeTypeID": 4,
        //             "ChargeTypeName": "Ordinary"
        //         },
        //         "DisbursementSummary": {
        //             "RelatedDisbursementCount": 0
        //         }
        //     },
        //     {
        //         "TimesheetLineID": 72369419,
        //         "Date": "2023-09-27T00:00:00",
        //         "StartTime": "2023-09-27T18:00:00",
        //         "StopTime": "2023-09-27T19:55:00",
        //         "NoOfUnits": 1.92,
        //         "UnitConversion": 1,
        //         "ChargeRate": 190,
        //         "Comment": "Nam",
        //         "LinkTimesheet_SignOff": 72369419,
        //         "TimesheetPeriod": {
        //             "TimesheetID": 5043073,
        //             "WeekEndingDate": "2023-09-27T00:00:00",
        //             "Committed": false
        //         },
        //         "Employee": {
        //             "EmployeeID": 8734,
        //             "EmployeeCode": null,
        //             "EmployeeName": "Shereen Fathima"
        //         },
        //         "Client": {
        //             "ClientID": 93126,
        //             "ClientCode": "681",
        //             "ClientAbbreviation": ".ABCC_V6",
        //             "ClientName": ".Abtrac V6"
        //         },
        //         "Job": {
        //             "JobID": 145772,
        //             "JobCode": "681-002",
        //             "JobDescription": "V6 .0.x Go Live"
        //         },
        //         "TaskGroup": null,
        //         "Task": {
        //             "TaskID": 5907259,
        //             "TaskDescription": "Abtrac Perf. - General"
        //         },
        //         "Activity": {
        //             "ActivityID": 17398,
        //             "ActivityName": "122 Work done on our Own Initiative"
        //         },
        //         "WorkItem": {
        //             "WorkItemID": 26501,
        //             "WorkItemNumber": 20544
        //         },
        //         "Invoice": null,
        //         "Locked": false,
        //         "LockedReason": null,
        //         "LogInfo": {
        //             "VersionID": 123
        //         },
        //         "ChargeType": {
        //             "ChargeTypeID": 4,
        //             "ChargeTypeName": "Ordinary"
        //         },
        //         "DisbursementSummary": {
        //             "RelatedDisbursementCount": 4
        //         }
        //     },
        //     {
        //         "TimesheetLineID": 72369447,
        //         "Date": "2023-09-27T00:00:00",
        //         "StartTime": null,
        //         "StopTime": null,
        //         "NoOfUnits": 2,
        //         "UnitConversion": 1,
        //         "ChargeRate": 0.96,
        //         "Comment": "H",
        //         "LinkTimesheet_SignOff": 72369447,
        //         "TimesheetPeriod": {
        //             "TimesheetID": 5043073,
        //             "WeekEndingDate": "2023-09-27T00:00:00",
        //             "Committed": false
        //         },
        //         "Employee": {
        //             "EmployeeID": 8734,
        //             "EmployeeCode": null,
        //             "EmployeeName": "Shereen Fathima"
        //         },
        //         "Client": {
        //             "ClientID": 93126,
        //             "ClientCode": "681",
        //             "ClientAbbreviation": ".ABCC_V6",
        //             "ClientName": ".Abtrac V6"
        //         },
        //         "Job": {
        //             "JobID": 145772,
        //             "JobCode": "681-002",
        //             "JobDescription": "V6 .0.x Go Live"
        //         },
        //         "TaskGroup": null,
        //         "Task": null,
        //         "Activity": null,
        //         "WorkItem": {
        //             "WorkItemID": 26501,
        //             "WorkItemNumber": 20544
        //         },
        //         "Invoice": null,
        //         "Locked": false,
        //         "LockedReason": null,
        //         "LogInfo": null,
        //         "ChargeType": {
        //             "ChargeTypeID": 1,
        //             "ChargeTypeName": "Disbursement"
        //         },
        //         "DisbursementSummary": {
        //             "RelatedDisbursementCount": 0
        //         }
        //     },
        //     {
        //         "TimesheetLineID": 72369448,
        //         "Date": "2023-09-27T00:00:00",
        //         "StartTime": null,
        //         "StopTime": null,
        //         "NoOfUnits": 10,
        //         "UnitConversion": 1,
        //         "ChargeRate": 0.96,
        //         "Comment": "Hh",
        //         "LinkTimesheet_SignOff": 72369448,
        //         "TimesheetPeriod": {
        //             "TimesheetID": 5043073,
        //             "WeekEndingDate": "2023-09-27T00:00:00",
        //             "Committed": false
        //         },
        //         "Employee": {
        //             "EmployeeID": 8734,
        //             "EmployeeCode": null,
        //             "EmployeeName": "Shereen Fathima"
        //         },
        //         "Client": {
        //             "ClientID": 93126,
        //             "ClientCode": "681",
        //             "ClientAbbreviation": ".ABCC_V6",
        //             "ClientName": ".Abtrac V6"
        //         },
        //         "Job": {
        //             "JobID": 145772,
        //             "JobCode": "681-002",
        //             "JobDescription": "V6 .0.x Go Live"
        //         },
        //         "TaskGroup": null,
        //         "Task": null,
        //         "Activity": null,
        //         "WorkItem": {
        //             "WorkItemID": 26501,
        //             "WorkItemNumber": 20544
        //         },
        //         "Invoice": null,
        //         "Locked": false,
        //         "LockedReason": null,
        //         "LogInfo": null,
        //         "ChargeType": {
        //             "ChargeTypeID": 1,
        //             "ChargeTypeName": "Disbursement"
        //         },
        //         "DisbursementSummary": {
        //             "RelatedDisbursementCount": 0
        //         }
        //     },
        //     {
        //         "TimesheetLineID": 72369449,
        //         "Date": "2023-09-27T00:00:00",
        //         "StartTime": null,
        //         "StopTime": null,
        //         "NoOfUnits": 4,
        //         "UnitConversion": 1,
        //         "ChargeRate": 0.96,
        //         "Comment": "test",
        //         "LinkTimesheet_SignOff": 72369449,
        //         "TimesheetPeriod": {
        //             "TimesheetID": 5043073,
        //             "WeekEndingDate": "2023-09-27T00:00:00",
        //             "Committed": false
        //         },
        //         "Employee": {
        //             "EmployeeID": 8734,
        //             "EmployeeCode": null,
        //             "EmployeeName": "Shereen Fathima"
        //         },
        //         "Client": {
        //             "ClientID": 93126,
        //             "ClientCode": "681",
        //             "ClientAbbreviation": ".ABCC_V6",
        //             "ClientName": ".Abtrac V6"
        //         },
        //         "Job": {
        //             "JobID": 145772,
        //             "JobCode": "681-002",
        //             "JobDescription": "V6 .0.x Go Live"
        //         },
        //         "TaskGroup": null,
        //         "Task": null,
        //         "Activity": null,
        //         "WorkItem": {
        //             "WorkItemID": 26501,
        //             "WorkItemNumber": 20544
        //         },
        //         "Invoice": null,
        //         "Locked": false,
        //         "LockedReason": null,
        //         "LogInfo": null,
        //         "ChargeType": {
        //             "ChargeTypeID": 1,
        //             "ChargeTypeName": "Disbursement"
        //         },
        //         "DisbursementSummary": {
        //             "RelatedDisbursementCount": 0
        //         }
        //     },
        //     {
        //         "TimesheetLineID": 72369459,
        //         "Date": "2023-09-27T00:00:00",
        //         "StartTime": null,
        //         "StopTime": null,
        //         "NoOfUnits": 5,
        //         "UnitConversion": 1,
        //         "ChargeRate": 0.96,
        //         "Comment": "Test only ",
        //         "LinkTimesheet_SignOff": 72369459,
        //         "TimesheetPeriod": {
        //             "TimesheetID": 5043073,
        //             "WeekEndingDate": "2023-09-27T00:00:00",
        //             "Committed": false
        //         },
        //         "Employee": {
        //             "EmployeeID": 8734,
        //             "EmployeeCode": null,
        //             "EmployeeName": "Shereen Fathima"
        //         },
        //         "Client": {
        //             "ClientID": 93126,
        //             "ClientCode": "681",
        //             "ClientAbbreviation": ".ABCC_V6",
        //             "ClientName": ".Abtrac V6"
        //         },
        //         "Job": {
        //             "JobID": 145772,
        //             "JobCode": "681-002",
        //             "JobDescription": "V6 .0.x Go Live"
        //         },
        //         "TaskGroup": null,
        //         "Task": null,
        //         "Activity": null,
        //         "WorkItem": {
        //             "WorkItemID": 26501,
        //             "WorkItemNumber": 20544
        //         },
        //         "Invoice": null,
        //         "Locked": false,
        //         "LockedReason": null,
        //         "LogInfo": null,
        //         "ChargeType": {
        //             "ChargeTypeID": 1,
        //             "ChargeTypeName": "Disbursement"
        //         },
        //         "DisbursementSummary": {
        //             "RelatedDisbursementCount": 0
        //         }
        //     }
        // ]
        // setSummary(TimesheetLineSummary)
    }, [selectedDate])

    const onCloseDrawer = () => {
        setOpenDrawer(false);
    }

    const [selectedDisbTypes, setSelectedDisbTypes]: any = useState()
    const [quantity, setQuantity] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [comment, setComment] = useState('')

    const [base64Image, setBase64Image] = useState('')

    const [disbForTimesheetLineId, setDisbForTimesheetLineId] = useState(0);

    const onSubmit = () => {

        const formData = {
            "TimesheetLineID": 0,
            "NoOfUnits": quantity,
            "ChargeRate": 1000.00,
            "Comment": comment,
            "DisbursementPaid": false,
            "DisbursementEnteredAmount": enteredAmount,
            "DisbursementTaxRate": 0.15,
            "DisbursementIncludesGST": false,
            "DisbursementPaymentReference": null,
            "IncludePercentageMargin": false,
            "PercentageMarginRate": 0,
            "SupplierInvoiceNo": null,
            "DisbursementType":
            {
                "DisbursementTypeID": selectedDisbTypes.DisbursementTypeID
            },
            "RelatedTimesheetLine":
            {
                "TimesheetLineID": disbForTimesheetLineId
            },
            "LogInfo":
            {
                "VersionID": 41
            },
            "DisbursementImage": {
                DisbursementImage: base64Image,
                TimesheetLineID: 0,
                DateSaved: formatDateTime(selectedDate).toString()
            },
        }

        console.log('formData', formData)


        const apiUrl = `https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/Timesheet/CreateDisbursementLineFromTimesheetLine`;


        const headers = {
            Authorization: `Bearer  ${auth?.accessToken}`,
            'Content-Type': 'application/json', // Corrected the typo in 'content-Type'
        };

        axios.post(apiUrl, formData, {
            headers: headers,
        })
            .then(response => {
                // Handle the response here
                setDisbForTimesheetLineId(0)
                console.log('Response Disbursement ::', response.data);
                alert("Disbursement create successfully")


            })
            .catch(error => {
                // Handle errors here
                alert(error)
                console.error('Error:', error);

            });


        console.log(selectedDisbTypes)
        console.log(quantity)
        console.log(enteredAmount)
        console.log(comment)
        console.log(base64Image)
    }
    

    // const today = new Date();
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);

        const tt = dateString.split("/")

        setSelectedDate(date || dayjs());
        console.log(`${tt[2]}-${tt[1]}-${tt[0]}`)

        console.log('fffffffffffff', formatDate(selectedDate))
    };


    // Function to format the date to '27-September-2023' format
    function formatDate(date: any) {
        return dayjs(date).format('DD-MMMM-YYYY');
    }

    // Function to format the date to '2023-09-27T00:00:00' format
    function formatDateTime(date: any) {
        return dayjs(date).format('YYYY-MM-DDTHH:mm:ss');
    }

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

                <DatePicker defaultValue={selectedDate} format={dateFormat} onChange={onChange} />
                <div>
                    <p className='text-xl font-bold text-[#C1D82F]'>Timesheets for: Shereen Fathima</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645]'>Print Disbursements</p>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Print Timesheet</p>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Commit/uncommit Timesheets</p>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Add New Timesheet</p>
                </div>
            </div>

            {/* Table */}
            <TimesheetTable summary={summary} setOpenDrawer={setOpenDrawer} setDisbForTimesheetLineId={setDisbForTimesheetLineId} />

            {/* Drawer for timesheet */}
            <DrawerComponent
                open={openDrawer}
                onClose={onCloseDrawer}
                onSubmit={onSubmit}
                content={<DisbursementScreen
                    selectedDisbTypes={selectedDisbTypes}
                    setSelectedDisbTypes={setSelectedDisbTypes}
                    setQuantity={setQuantity}
                    quantity={quantity}
                    enteredAmount={enteredAmount}
                    setEnteredAmount={setEnteredAmount}
                    comment={comment}
                    setComment={setComment}
                    base64Image={base64Image}
                    setBase64Image={setBase64Image}
                />}
            />
        </div>

    );
}

export default HomeScreen