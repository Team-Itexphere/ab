import React, { useState } from 'react'
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

const LoginScreen = () => {
    const navigate = useNavigate();


    const { setAuth }: any = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const submit = () => {
        setLoading(true)
        const apiUrl = 'https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/token';
        const username = 'Shereen.fathima@Abtrac.com'; // Replace with your username
        const password = 'Shereen123$'; // Replace with your password

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa('MOBILE:519EAC95-AB16-46C9-9BA6-0202B524789E')}`,
        };

        const data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        data.append('grant_type', 'password');


        axios.post(apiUrl, data, { headers })
            .then((response: any) => {
                setLoading(false)
                // Handle the response here
                console.log('Response:', response.data);
                const accessToken = response.data.access_token;
                console.log('accessToken ::', accessToken)
                setAuth({ accessToken })
                navigate('/');
            })
            .catch(error => {
                setLoading(false)
                // Handle errors here
                console.error('Error:', error);
            });
    }


    ///////////////////////////////////////////
    // const submit = () => {

    //     const apiUrl = `https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/Timesheet/GetTimesheetLinesByEmployee?employeeid=8734&filter=Date[e]'27-September-2023'`;

    //     const headers = {
    //         Authorization: `Bearer m-2rSdLzNpM-Aa2_5KrYlNlY2tWbTjuhBh8mAUpoQeKXShezPh1dU9cz0eTDTL49pVYCFYEn-Wb4-JNdzJPj3LxQitzMyPL0WI2NRzS7Yyc4-7vf3Jr8fyAzPdpi9Ns6Aojghdue767pselfpie787dNRl-5N5RPy4c3BBzL1_WIg9gTi5sQttnz8ubApeohUJrgvUojb40ZhvmVotbaTwscU98rHYp22wjhC9dEtSbXoANfqzfP-SP4Vqo-Y382ftTGDHETXNJF9suv1g5QIB2ELZNY5STapesE3IOzAJwZlsBh9G1GhOoow76tZan7_KioVr8K_O99OOQqEXBsjIaxt0cDlWouUEG_t27yZnobhHfF14y4L2yIuSvxUBITkOwRrwVJkZp-UIIzsc3Rhw`,
    //     };

    //     axios.get(apiUrl, { headers })
    //         .then(response => {
    //             // Handle the response here
    //             console.log('Response:', response.data);
    //         })
    //         .catch(error => {
    //             // Handle errors here
    //             console.error('Error:', error);
    //         });
    // }
    ///////////////////////////////////////////


    // const submit = () => {
    //     const apiUrl = 'https://cors-anywhere.herokuapp.com/https://abtraconlinesandboxapi.azurewebsites.net/api/account/GetAbtracMobileVersion';
    //     const versionId = 51; // Replace with the desired version ID

    //     // Set up the query parameters
    //     const params = {
    //         versionid: versionId,
    //     };

    //     // Send the Axios GET request
    //     axios.get(apiUrl, { params })
    //         .then(response => {
    //             // Handle the response here
    //             console.log('Response:', response.data);
    //         })
    //         .catch(error => {
    //             // Handle errors here
    //             console.error('Error:', error);
    //         });
    // }

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
                                className="accent-[#C5D939]"
                            />

                            <p className='ml-2'>Stay logged in for next 12 hours</p>
                        </div>

                        <button className='w-full bg-[#cad400] py-2 rounded-xl text-xl text-[#053645] font-semibold mb-4'
                            onClick={() => submit()}
                        >{loading ? 'loarding' : 'LOGIN'}</button>
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