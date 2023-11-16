import React from 'react'
import Header from '../../components/UI/header/header'
import Navbar from '../../components/UI/navbar/navbar'

import './DisbursementScreen.css'
import ImageDragAndDrop from '../../components/common/Drag&DropImg/imageDragAndDrop'

function DisbursementScreen() {



    return (
        <div>
            {/* App Header */}
            <Header />
            <Navbar />

            <div className='flex justify-between items-center p-5'>
                <div>
                    <p className='text-xl font-bold text-[#C1D82F]'>Disbursement for: Shereen Fathima for Period Ending 17 Nov 2023</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Reset</p>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Apply</p>
                    <p className='text-xs font-semibold py-1 rounded-lg px-2 border-2 border-[#C1D82F] text-[#053645] ml-1'>Back</p>
                </div>
            </div>

            {/* Drag & Drop image uploading */}
            <ImageDragAndDrop />

            <div>
                <div>


                    <div>
                        <p>Disbursement Type</p>
                        <div>
                            <input type="text" />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DisbursementScreen