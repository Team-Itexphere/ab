import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex flex-wrap bg-[#EEEEEE] h-10 items-center'>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Home</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Client, Contacts & Projects</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Time & Disbursements</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Invoices</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Accounting</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Debtor Management</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Reports</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Administration</p>
            <p className='grow text-[#053645] hover:text-[#C1D82F] text-sm font-bold text-center cursor-pointer'>Help</p>
        </div>
    )
}

export default Navbar