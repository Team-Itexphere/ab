import React from 'react'

const Header = () => {
    return (
        <div
            className='flex p-5 justify-between bg-gradient-to-r from-[#119FA4] to-[#C6D304]'
        >
            {/* Logo */}
            <div>
                <img
                    src='https://abtraconlinesandbox.azurewebsites.net/Styles/Images/AbtracLogoSimpliedVersionWhiteText.png'
                    alt="abtraconline"
                    className='bg-cover h-8'
                />
            </div>

            {/* User Details */}
            <div className='flex items-center' >
                <div>
                    <p className='text-xs leading-4 font-bold'>Welcome Shereen</p>
                    <p className='text-xs leading-3 font-bold text-right'>From Abtrac</p>
                </div>

                <div className='relative ml-1'>
                    <img src="https://abtraconlinesandbox.azurewebsites.net/Styles/Images/Profile-White-Background-60pix.png"
                        alt="Profile"
                        className='h-9 w-9'
                    />

                    <p className='absolute top-0 right-0 text-[10px] font-bold text-white leading-[13px] px-[5px] bg-[#CC0000] mt-[-5px] rounded-3xl'>2</p>
                </div>
            </div>
        </div>
    )
}

export default Header