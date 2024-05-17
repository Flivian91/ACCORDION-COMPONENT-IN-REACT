import React from 'react'

function Overlay({setToggleModel}) {
  return (
    <div onClick={()=>setToggleModel(prevstate => !prevstate)} className='fixed top-0 left-0 w-full h-full z-10 backdrop-blur-sm'></div>
  )
}

export default Overlay