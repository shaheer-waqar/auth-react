import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {Link } from 'react-router-dom'

function Home({userData}) {

    let signupData = localStorage.getItem("signupData");
    let signUpUser = JSON.parse(signupData);
      
    return (
        <>
        {
        userData == null ?
        <div className='text-center font-poppins'>
            <h1 className='text-center text-xl font-bold pt-[100px]'>Your Are Not Logged in</h1>
            <Link to="/login" className='underline'>Login</Link>
        </div> 
        :
        <div className='text-center pt-[100px] font-poppins'>
            <h1 className='text-2xl uppercase text-slate-900 font-bold'>Dashbord</h1>
            <h1 >Welcome {signUpUser.fullName} you have succesfully logged in</h1>
        </div>


        }
        </>
  )
}

export default Home