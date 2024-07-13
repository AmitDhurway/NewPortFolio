import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='main'>
      <video autoPlay muted loop className='video-bg'>
        <source src='./src/assets/videos/bg2.mp4' />

        Your browser does not support the video tag.
      </video>
      <div className='content flex justify-between'>

        <div className="logo"><img src="./src/assets/images/logo1.png" alt="logo" className='h-16' /></div>


        <div className="event">PortFolio</div>
        <div className="about">About Me!</div>


      </div>
      <div className="content flex justify-between mt-80 text-black h-64 p-0">
        <div className="edu bg-transparent text-white w-full border-2 border-blue-600 m-1">education</div>
        <div className="social bg-transparent text-white w-full border-2 border-blue-600 m-1">social</div>
        <div className="project bg-transparent text-white w-full border-2 border-blue-600 m-1">project</div>
      </div>
    </div>
  );
}
