import React from 'react'
import { IoCreateOutline } from "react-icons/io5";

function CreateQuiz({setToggleModel}) {
  return (
    <div className='fixed top-1 right-2'>
      <button onClick={()=> setToggleModel(prevState => !prevState)} className='px-8 p-2 text-xl bg-indigo-600 items-center text-white flex gap-2 rounded'>
      <IoCreateOutline />
      <span>Compose question</span>
      </button>
    </div>
  )
}

export default CreateQuiz
