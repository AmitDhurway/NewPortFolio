import React from 'react'
import './WelcomePage.css'

export default function WelcomePage() {
  return (
    <div className="bg-image w-full h-screen flex justify-center items-center flex-col"><img src="./src/assets/images/img4.jpg" alt="Background" className="bg-image-inside" />
      <div className='flex justify-center items-center flex-col relative '>
      
        <h1 className="slide-right text-4xl font-bold text-white shadow-lg" >Amit Kumar Dhurway</h1>
        <h1 className="slide-left text-2xl font-bold shadow-lg">Web Developer</h1>
      </div>
    </div>
  )
}
