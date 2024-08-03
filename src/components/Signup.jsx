import React, { useState } from 'react'
import Input from './Input'
import Navbar from './Navbar';
import { Link, redirect, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  let [signUp,setSignup] = useState({
    fullName:"",
    userName:"",
    email:"",
    password:"",
  });

  let [passToggle,setpassToggle] = useState(false);

  const toggleHnadler=()=>{
    setpassToggle((prev)=>!prev);
  }

  function accCreation (e){
    e.preventDefault()
    let signstr = JSON.stringify(signUp);
    localStorage.setItem("signupData",signstr);
    navigate("/login");
  }

  return (
    <section className='font-poppins'>
        <div className="flex items-center justify-center px-4 py-4">
          <div className="w-full max-w-[400px] ">
            <h2 className="text-3xl font-semibold leading-tight text-black">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <form onSubmit={(e)=>accCreation(e)}>
              <div className="space-y-5">
                <Input label="Full Name" type="text"  setInput={(e)=> setSignup({...signUp,fullName : e.target.value})} value={signUp.fullName} />
                <Input label="User Name" type="text" setInput={(e)=> setSignup({...signUp,userName : e.target.value})} value={signUp.userName} />
                <Input label="Email" type="email" setInput={(e)=> setSignup({...signUp,email : e.target.value})} value={signUp.email}/>
                <Input label="Password" type={passToggle ? "text" : "password"} setInput={(e)=> setSignup({...signUp,password : e.target.value})} 
                value={signUp.password} toggleHnadler={toggleHnadler} passToggle={passToggle}/> 
                <div>
                  <button 
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account 
                  </button >
                </div>
              </div>
              </form>
          </div>
        </div>
    </section>
  )
}

export default Signup