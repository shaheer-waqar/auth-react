import React from 'react'
import { IoEye,IoEyeOff  } from "react-icons/io5";


function Input({label,type,setInput,value,toggleHnadler,passToggle}) {
  return (
    <div>
      <label className="text-base font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        placeholder={label}
        onChange={setInput}
        value={value}
        required
        ></input>
        {
          toggleHnadler ?
          <p className='absolute top-3 right-2 text-xl '>
            { 
              passToggle ? 
            
            <IoEye onClick={toggleHnadler} />
            :
            <IoEyeOff onClick={toggleHnadler}/>
            }
            </p>
          : 
          <></>

        }
      </div>
    </div>
  )  
}

export default Input