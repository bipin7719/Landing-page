import React from 'react'
import { FaTshirt, FaCode, FaDatabase, FaServer, FaChartBar, FaGlobe, FaMobile } from "react-icons/fa";
import b1 from '/public/banner_products_collection/b1.webp';
import h1 from '/public/banner_products_collection/h1.webp';
import j2 from '/public/banner_products_collection/j2.webp';
import s1 from '/public/banner_products_collection/s1.webp';
import sh1 from '/public/banner_products_collection/sh1.webp';
import sh2 from '/public/banner_products_collection/sh2.webp';

export default function Service() {
  return (
    <div className='bg-[#f5f5dc] p-10 flex flex-col text-center items-center'>
      <FaMobile size = {32} color='red' className='mb-4' />
      <h1 className='text-center text-4xl font-bold mb-3 mt-3'>What's Your Vibe?</h1>
      <p className='text-center mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Donec sit amet neque tellus. Vivamus at metus sem. </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
            <div className='flex flex-col font-bold text-center items-center'>
            <img src={b1} className='h-80 w-72'/>
          <h2 classname="text-xl font-bold mb-3">Cargo Collection</h2>
          <p>Rs. 1299/- only</p>
        </div>

        <div className='flex flex-col text-center font-bold items-center'>
        <img src={h1} className='h-80 w-72'/>
          <h2 classname="text-xl font-bold mb-3">Sweat Shirts</h2>
          <p>Rs. 1299/- only</p>
        </div>

        <div className='flex flex-col text-center font-bold items-center'>
        <img src={j2} className='h-80 w-72'/>
          <h2 classname="text-xl font-bold mb-3">Jeans Collections</h2>
          <p>Rs. 1299/- only</p>
        </div>

        <div className='flex flex-col text-center font-bold items-center'>
        <img src={s1} className='h-80 w-72'/>
          <h2 classname="text-xl font-bold mb-3">Shorts Collections</h2>
          <p>Rs. 1299/- only </p>
        </div>

        <div className='flex flex-col text-center font-bold items-center'>
        <img src={sh1} className='h-80 w-72'/>
          <h2 classname="text-xl font-bold mb-3">Men's Shirt </h2>
          <p>Rs. 1299/- only </p>
        </div>

        <div className='flex flex-col text-center font-bold items-center'>
        <img src={sh2} className='h-80 w-72'/>
          <h2 classname="text-xl font-bold mb-3">Full Set</h2>
          <p>Rs. 1299/- only</p>
        </div>
      </div>
    </div>
  )
}

