import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Header from '../../components/UI/header/header'
// import Navbar from '../../components/UI/navbar/navbar'

import './DisbursementScreen.css'

import ImageDragAndDrop from '../../components/common/Drag&DropImg/imageDragAndDrop'
import InputBoxCombo from '../../components/UI/InputCombo/inputCombo.comp'
import GenericInput from '../../components/common/GenericInput/genericInput'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';


function DisbursementScreen({ selectedDisbTypes,
    setSelectedDisbTypes, quantity, setQuantity, enteredAmount, setEnteredAmount,
    comment, setComment, base64Image, setBase64Image }: any) {

    const navigate: any = useNavigate();

    const { auth, setAuth }: any = useAuth();

    const [disbTypes, setDisbTypes] = useState([])

    const [showOption, setShowOption] = useState(false)



    // console.log('base64Image', base64Image)

    useEffect(() => {
        const getDisbursementType = () => {

            const apiUrl = `https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/Timesheet/GetDisbursementType`;

            const headers = {
                Authorization: `Bearer ${auth?.accessToken}`,
            };

            axios.get(apiUrl, { headers })
                .then(response => {
                    // Handle the response here
                    console.log('Response GetDisbursementType ::', response.data);

                    const originalArray = response.data
                    const transformedArray = originalArray.map((item: any, index: any): any => {
                        return {
                            label: item?.DisbursementName,
                            DisbursementTypeID: item.DisbursementTypeID,
                            DisbursementName: item.DisbursementName,
                            key: index.toString(),
                        }
                    }).flatMap((item: any, index: any, array: any) => {
                        // Check if it's not the last item in the array
                        if (index < array.length - 1) {
                            return [
                                item,
                                {
                                    type: 'divider',
                                },
                            ];
                        } else {
                            // Return the item if it's the last one to avoid adding a divider after it
                            return [item];
                        }
                    });

                    setDisbTypes(originalArray)


                })
                .catch(error => {
                    // Handle errors here
                    console.error('Error:', error);
                    setAuth({});
                    navigate('/login');
                });
        }

        getDisbursementType();
        // eslint-disable-next-line react-hooks/exhaustive-deps

        // const DisbursementType: any = [
        //     {
        //         "DisbursementTypeID": 3041,
        //         "DisbursementName": "Lease Hire Costs",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 1,
        //         "DefRateIncludesTax": true,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 2,
        //             "DisbEmpReimbRuleDescription": "Cost"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3042,
        //         "DisbursementName": "Other",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 1,
        //         "DefRateIncludesTax": true,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 4,
        //             "DisbEmpReimbRuleDescription": "N/A"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3043,
        //         "DisbursementName": "Parking",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 1,
        //         "DefRateIncludesTax": true,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": {
        //             "DisbursementTypeGroupID": 26,
        //             "DisbursementTypeGroupName": "Group One"
        //         },
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 2,
        //             "DisbEmpReimbRuleDescription": "Cost"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3045,
        //         "DisbursementName": "Postage",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 1,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 0.88,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 1,
        //             "DisbEmpReimbRuleDescription": "Charge"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3046,
        //         "DisbursementName": "Printing and Photocopying",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 1,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 2,
        //             "DisbEmpReimbRuleDescription": "Cost"
        //         },
        //         "EmpReimbAddGST": true,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3047,
        //         "DisbursementName": "Stationery",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 0,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 2,
        //             "DisbEmpReimbRuleDescription": "Cost"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3048,
        //         "DisbursementName": "test'z",
        //         "DisbCurrent": false,
        //         "DefaultUnitCharge": 1,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 4,
        //             "DisbEmpReimbRuleDescription": "N/A"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": true
        //     },
        //     {
        //         "DisbursementTypeID": 3049,
        //         "DisbursementName": "Travel (AKL Airport Mileage)",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 120,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 120,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 3,
        //             "DisbEmpReimbRuleDescription": "Amount As Entered"
        //         },
        //         "EmpReimbAddGST": true,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3050,
        //         "DisbursementName": "Travel (General)",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 0,
        //         "DefRateIncludesTax": true,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 2,
        //             "DisbEmpReimbRuleDescription": "Cost"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3051,
        //         "DisbursementName": "Travel (Mileage, NZ+AU 1.6-2.4L Engine)",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 0.74,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 0.74,
        //         "DisbursementTypeGroup": {
        //             "DisbursementTypeGroupID": 27,
        //             "DisbursementTypeGroupName": "Group Two"
        //         },
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 2,
        //             "DisbEmpReimbRuleDescription": "Cost"
        //         },
        //         "EmpReimbAddGST": true,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 3052,
        //         "DisbursementName": "Travel Flights",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 1,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 4,
        //             "DisbEmpReimbRuleDescription": "N/A"
        //         },
        //         "EmpReimbAddGST": false,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     },
        //     {
        //         "DisbursementTypeID": 13516,
        //         "DisbursementName": "Comissions",
        //         "DisbCurrent": true,
        //         "DefaultUnitCharge": 0,
        //         "DefRateIncludesTax": false,
        //         "DefaultUnitCost": 0,
        //         "DisbursementTypeGroup": null,
        //         "EmployeeDisbursement": true,
        //         "MYOB_Account_No": null,
        //         "EmployeeReimbursementRule": {
        //             "DisbEmpReimbRuleID": 1,
        //             "DisbEmpReimbRuleDescription": "Charge"
        //         },
        //         "EmpReimbAddGST": true,
        //         "AutoAdd": false,
        //         "AccountingGLCode": null,
        //         "CanBeScheduled": false
        //     }
        // ]

        // setDisbTypes(DisbursementType)
    }, [])

    const onSelectItem = (val: any) => {
        console.log(val)
        setSelectedDisbTypes(val)

        setShowOption(false)
    }

    return (
        <div>
            {/* App Header */}
            {/* <Header />
            <Navbar /> */}

            {/* <div className='flex justify-between items-center p-5'>
                <div>
                    <p className='text-xl font-bold text-[#C1D82F]'>Disbursement for: Shereen Fathima for Period Ending 17 Nov 2023</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Reset</p>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Apply</p>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Back</p>
                </div>
            </div> */}

            <div>

                {/* input Combo  */}
                <InputBoxCombo
                    value={selectedDisbTypes?.DisbursementName ? selectedDisbTypes?.DisbursementName : ''}
                    Title='Disbursement Type'
                    name='Disbursement Type'
                    placeholder='Disbursement Type'
                    handleInputChange={() => { }}
                    dropdownArray={disbTypes}
                    showOption={showOption}
                    onFocus={() => setShowOption(true)}
                    onBlur={() => { }}

                    onSelectItem={(val: any) => onSelectItem(val)}
                />

                <div className='flex w-full mt-3 '>
                    <GenericInput
                        value={quantity}
                        Title='Quantity'
                        name='Add Quantity'
                        placeholder='Add Quantity'
                        containerStyle="mr-1"
                        handleInputChange={(e) => setQuantity(e.target.value)}

                    />
                    <GenericInput
                        value={enteredAmount}
                        Title='Entered Amount'
                        name='Enter Amount'
                        placeholder='Enter Amount'
                        containerStyle="ml-1"
                        handleInputChange={(e) => setEnteredAmount(e.target.value)}
                    />
                </div>

                {/* checkboxes */}
                <div className='flex justify-between'>
                    <div className='mx-auto mt-3 flex flex-col items-center justify-center '>
                        <p className='font-medium text-base text-gray-700 mb-1'>Has Tax</p>
                        <input
                            type="checkbox"
                            className="accent-[#C5D939]"
                        />
                    </div>
                    <div className='mx-auto mt-3 flex flex-col items-center justify-center '>
                        <p className='font-medium text-base text-gray-700 mb-1'>Has Margin</p>
                        <input
                            type="checkbox"
                            className="accent-[#C5D939]"
                        />
                    </div>
                    <div className='mx-auto mt-3 flex flex-col items-center justify-center '>
                        <p className='font-medium text-base text-gray-700 mb-1'>Paid?</p>
                        <input
                            type="checkbox"
                            className="accent-[#C5D939]"
                        />
                    </div>
                </div>


                <div className='mt-3 '>
                    <p className='font-medium text-base text-gray-700'>Comment</p>
                    <textarea
                        value={comment}
                        name="Comment"
                        id="Comment"
                        className="block w-full mt-1 rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none resize-none" // Modified className for textarea
                        placeholder="Comment"
                        rows={4}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>

                {/* Drag & Drop image uploading */}
                <div className='flex items-center justify-center mt-3'>
                    <ImageDragAndDrop
                        base64Image={base64Image}
                        setBase64Image={setBase64Image}
                    />
                </div>

            </div>

        </div>
    )
}

export default DisbursementScreen