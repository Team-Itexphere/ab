import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-wrap bg-[#EEEEEE] h-10 items-center'>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Home</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Client, Contacts & Projects</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Time & Disbursements</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer' onClick={() => navigate(`/work-scheduling`)}>work-scheduling</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer' onClick={() => navigate(`/workRolePlay`)}>workRolePlay</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer' onClick={() => navigate(`/syncfusion`)}>Syncfusion scheduling</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Reports</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Administration</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Help</p>
        </div>
    )
}

export default Navbar