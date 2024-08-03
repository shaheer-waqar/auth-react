import React, { useState } from 'react'
import Input from './Input'
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";


function Login({loginHandler}) {
  const navigate = useNavigate();
  let [userfound,setUserFound] = useState(false);
  let [login,setlogin] = useState({
    email:"",
    password:"",
  })
  let [passToggle,setpassToggle] = useState(false);

  const toggleHnadler=()=>{
    setpassToggle((prev)=>!prev);
  }

  function accLogin (e){
    let signupData = localStorage.getItem("signupData");
    let signupUser = JSON.parse(signupData);
    e.preventDefault();

    if(signupUser){
      if(signupUser.email === login.email && signupUser.password === login.password){
        loginHandler(login);
        navigate("/");
      }else{
        setUserFound(true)
      }
    }else{
      setUserFound((prev)=>!prev)
    }
  }
  
  return (
    <section className='font-poppins'>
        <div className="flex items-center justify-center px-4 py-4">
          <div className="w-full max-w-[400px] ">
            <h2 className="text-3xl font-semibold leading-tight text-black">Login</h2>
            <p className="mt-2 text-base text-gray-600">
              Not have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign up
              </Link>
            </p>
            {
             userfound ? <p className='border my-1 border-red-600 px-2 py-1 flex items-center gap-2'>
              <MdErrorOutline className='text-red-600'/> User not found </p>
             :
             <></>
            }
            <form onSubmit={(e)=>accLogin(e)}>
              <div className="space-y-5">
                <Input label="Email" type="email" setInput={(e)=> setlogin({...login,email : e.target.value})} value={login.email}/>
                <Input label="Password" type={passToggle ? "text" : "password"} setInput={(e)=> setlogin({...login,password : e.target.value})} 
                value={login.password} toggleHnadler={toggleHnadler} passToggle={passToggle}/>
                <div>
                  <button 
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Login 
                  </button >
                </div>
              </div>
              </form>
          </div>
        </div>
    </section>
  )    
}

export default Login