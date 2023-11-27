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

import TimesheetLineSummaryData from '../../data/timesheetLineSummary.json'

const HomeScreen = () => {
    const navigate: any = useNavigate();

    const { auth, setAuth }: any = useAuth();

    const [summary, setSummary] = useState([])
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const dateFormat = 'YYYY/MM/DD';


    useEffect(() => {
        const submit = () => {

            // const apiUrl = `https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/Timesheet/GetTimesheetLinesByEmployee?employeeid=8734&filter=Date[e]'27-September-2023'`;
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


        // setSummary(TimesheetLineSummary)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // if (summary.length === 0) return <h1>Loarding... or No Data to Display</h1>
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