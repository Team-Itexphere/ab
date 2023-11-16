import React from 'react'

// import Header from '../../components/UI/header/header'
// import Navbar from '../../components/UI/navbar/navbar'

import './DisbursementScreen.css'

import ImageDragAndDrop from '../../components/common/Drag&DropImg/imageDragAndDrop'
import InputBoxCombo from '../../components/UI/InputCombo/inputCombo.comp'


function DisbursementScreen() {



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
                    Title='Disbursement Type'
                    name='Disbursement Type'
                    placeholder='Disbursement Type'
                />

                <div className='flex w-full mt-3 '>
                    <InputBoxCombo
                        Title='Quantity'
                        name='Add Quantity'
                        placeholder='Add Quantity'
                        containerStyle="mr-1"
                    />
                    <InputBoxCombo
                        Title='Entered Amount'
                        name='Enter Amount'
                        placeholder='Enter Amount'
                        containerStyle="ml-1"
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
                        name="Comment"
                        id="Comment"
                        className="block w-full mt-1 rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none resize-none" // Modified className for textarea
                        placeholder="Comment"
                        rows={4}
                    />
                </div>

                {/* Drag & Drop image uploading */}
                <div className='flex items-center justify-center mt-3'>
                    <ImageDragAndDrop />
                </div>

            </div>

        </div>
    )
}

export default DisbursementScreen