// Banner.jsx
import React from 'react';
import image1 from '/public/bannerImg.jpg'

export default function Banner() {
  return (
    <div className='relative h-[100vh]'  >
      <img src= {image1} alt='bannerImg' className='w-full h-full object-cover' />
      <div className="text-white p-8 text-center justify-center items-center left-0 right-0 absolute top-64" >
        <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4">We provide the best services for you.</p>
      </div>

    </div>
    
  );
}
