import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {  
   let [userData,setUserData]= useState(null);

   useEffect(() => {
    const loginData = localStorage.getItem('loginData');
    if (loginData) {
        setUserData(JSON.parse(loginData));
    }
}, []);

const login = (data) => {
  localStorage.setItem('loginData', JSON.stringify(data));
  setUserData(data);
};

const logout = () => {
  localStorage.removeItem('loginData');
  setUserData(null);
};
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar logout={logout} userData={userData}/>}>
        <Route path='/' element={<Home userData={userData}/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login loginHandler={login} />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
