import React from 'react'
import { FaTshirt, FaCode, FaDatabase, FaServer, FaChartBar, FaGlobe, FaMobile } from "react-icons/fa";

export default function Service() {
  return (
    <div className='bg-slate-400 p-10 flex flex-col text-center items-center'>
      <FaMobile size = {32} color='red' className='mb-4' />
      <h1 className='text-center text-4xl font-bold mb-3 mt-3'>Our Services</h1>
      <p className='text-center mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Donec sit amet neque tellus. Vivamus at metus sem. </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
            <div className='flex flex-col text-center items-center'>
            <FaTshirt size={32} color='green' className='mb-4' />
          <h2 classname="text-xl font-bold mb-3">Donec dfbeg</h2>
          <p>Pmi mauris condimentum arcu, eu consequat ex velit sit amet quam. Praesent condimentum pretium placerat. </p>
        </div>

        <div className='flex flex-col text-center items-center'>
          <FaCode size = {32} color='blue' className='mb-4 mt-4' />
          <h2 classname="text-xl font-bold mb-3">Donec dfbeg</h2>
          <p>Pmi mauris condimentum arcu, eu consequat ex velit sit amet quam. Praesent condimentum pretium placerat. </p>
        </div>

        <div className='flex flex-col text-center items-center'>
          <FaDatabase size = {32} color='yellow' className='mb-4' />
          <h2 classname="text-xl font-bold mb-3">Donec dfbeg</h2>
          <p>Pmi mauris condimentum arcu, eu consequat ex velit sit amet quam. Praesent condimentum pretium placerat. </p>
        </div>

        <div className='flex flex-col text-center items-center'>
        <FaServer size = {32} color='#fc0384' className='mb-4' />
          <h2 classname="text-xl font-bold mb-3">Donec dfbeg</h2>
          <p>Pmi mauris condimentum arcu, eu consequat ex velit sit amet quam. Praesent condimentum pretium placerat. </p>
        </div>

        <div className='flex flex-col text-center items-center'>
        <FaChartBar size = {32} color='#c603fc' className='mb-4' />
          <h2 classname="text-xl font-bold mb-3">Donec dfbeg</h2>
          <p>Pmi mauris condimentum arcu, eu consequat ex velit sit amet quam. Praesent condimentum pretium placerat. </p>
        </div>

        <div className='flex flex-col text-center items-center'>
        <FaGlobe size = {32} color='#03fcec' className='mb-4' />
          <h2 classname="text-xl font-bold mb-3">Donec dfbeg</h2>
          <p>Pmi mauris condimentum arcu, eu consequat ex velit sit amet quam. Praesent condimentum pretium placerat. </p>
        </div>
      </div>
    </div>
  )
}

