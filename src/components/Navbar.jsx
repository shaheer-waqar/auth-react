import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Navbar({logout,userData}) {
    let logindata= localStorage.getItem("loginData");
    const navigate = useNavigate();
    const handlerlogOut = ()=>{
        logout()
        navigate("/");
    }
  return (
    <>
    <div className='bg-slate-900 h-9 flex justify-center md:justify-end font-poppins items-center'>
        <ul className='flex gap-10 px-1 md:px-14'>
            <li className='text-white cursor-pointer hover:underline'><NavLink to="/">Home</NavLink></li>
            {userData 
            ?
            <li className='text-white cursor-pointer hover:underline' onClick={handlerlogOut}>LogOut</li>
            :
            <>
            <li className='text-white cursor-pointer hover:underline'><NavLink to="/signup">Sign Up</NavLink></li>
            <li className='text-white cursor-pointer hover:underline '><NavLink to="/login">Login</NavLink></li>
            </>
            }
        </ul>
    </div>
        <Outlet/>

    </>
  )
}

export default Navbar