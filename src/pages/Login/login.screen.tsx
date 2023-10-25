import React, { useState } from 'react'
import axios from 'axios';

const LoginScreen = () => {

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    // const submit = () => {

    //     const apiUrl = 'https://abtraconlinesandboxapi.azurewebsites.net/token';
    //     const username = 'Shereen.fathima@Abtrac.com'; // Replace with your username
    //     const password = 'Shereen123$'; // Replace with your password

    //     const headers = {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         Authorization: `Basic ${btoa('MOBILE:519EAC95-AB16-46C9-9BA6-0202B524789E')}`,
    //     };

    //     const data = new URLSearchParams();
    //     data.append('username', username);
    //     data.append('password', password);
    //     data.append('grant_type', 'password');


    //     axios.post(apiUrl, data, { headers })
    //         .then(response => {
    //             // Handle the response here
    //             console.log('Response:', response.data);
    //         })
    //         .catch(error => {
    //             // Handle errors here
    //             console.error('Error:', error);
    //         });
    // }
    const submit = () => {
        const apiUrl = 'https://abtraconlinesandboxapi.azurewebsites.net/api/account/GetAbtracMobileVersion';
        const versionId = 51; // Replace with the desired version ID

        // Set up the query parameters
        const params = {
            versionid: versionId,
        };

        // Send the Axios GET request
        axios.get(apiUrl, { params })
            .then(response => {
                // Handle the response here
                console.log('Response:', response.data);
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    }

    return (
        <div className="w-screen min-h-screen bg-[#f2f2f2] flex items-center justify-center">

            <div className="flex flex-col items-center justify-center w-screen">
                <img
                    alt='abtraconline'
                    src='https://www.abtraconline.com/Styles/Images/AbtracLogoSimpliedVersion.png'
                    className='h-11 max-w-2xl'
                />
                <div className='w-full sm:w-[90%] md:w-[75%] lg:w-[50%] max-w-[600px]'>


                    <div className="flex flex-col  px-14 py-12 mt-7 border rounded-xl border-[#A6A6A6] bg-white">
                        <p className='text-center mb-10 text-3xl text-[#053645] font-semibold'>Login to Abtrac</p>
                        <input
                            placeholder='Email'
                            className='w-full border py-2 px-2 rounded-lg border-[#C0C0C0] mb-4'
                            onChange={(e) => setformData({ ...formData, email: e.target.value })}
                        />
                        <input
                            placeholder='Password'
                            className='w-full border  py-2 px-2 rounded-lg border-[#C0C0C0] mb-7'
                            onChange={(e) => setformData({ ...formData, password: e.target.value })}
                        />

                        <div className='flex items-center mb-5'>
                            <input
                                type="checkbox"
                            />

                            <p className='ml-2'>Stay logged in for next 12 hours</p>
                        </div>

                        <button className='w-full bg-[#cad400] py-2 rounded-xl text-xl text-[#053645] font-semibold mb-4'
                            onClick={() => submit()}
                        >LOGIN</button>
                        <p className=' underline'>Forgotten your password?</p>
                    </div>

                    <div className='flex justify-between px-10 py-10'>
                        <p className=' underline'>Privacy Policy</p>
                        <p className=' underline'>Term and Conditions</p>
                        <p className=' underline'>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen