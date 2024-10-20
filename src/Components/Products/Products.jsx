import React from 'react'
import { FaTshirt, FaCode, FaDatabase, FaServer, FaChartBar, FaGlobe, FaMobile } from "react-icons/fa";
import im1 from '/public/products/im1.PNG';
import im2 from '/public/products/im2.jpG';
import im3 from '/public/products/im3.PNG';
import im4 from '/public/products/im4.PNG';
import im5 from '/public/products/im5.PNG';
import im6 from '/public/products/im6.PNG';
import im7 from '/public/products/im7.PNG';
import im8 from '/public/products/im8.PNG';
import im9 from '/public/products/im9.JPG';
import im10 from '/public/products/im10.PNG';
import im11 from '/public/products/im11.PNG';
import im12 from '/public/products/im12.PNG';


const Products = () => {
  return (
    
    <div className='bg-white p-10 flex flex-col text-center items-center w-3/4'>
     
      <h1 className='text-center text-4xl font-bold mb-3 mt-3'>Our Products</h1>
      <p className='text-center mb-7'>You can choose or customise any of our tees!<br></br>Grab your tees asap! </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
            <div className='flex flex-col'>
            <img src={im1} className='h-80 w-72'/>
            <div className='text-center items-center '>
          <h2 className="text-xl font-bold mb-3 ">Shreya Ghoshal's Fan Tee</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>

        

        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col'>
            <img src={im2} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">Enjoy Every Moment</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>

        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col '>
            <img src={im3} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">Hustle</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>


        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col'>
            <img src={im4} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">এ হৃদয় দপ্তর পাল্টাচ্ছে না!</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>


        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col'>
            <img src={im5} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">I Want Peace And More Money</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>

        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col relative'>
            <img src={im6} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">জীবন ঘেঁটে ' ঘ '</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>


        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col '>
            <img src={im7} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">TrendHubs's Official Tee</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>

        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col relative '>
            <img src={im8} className='h-4/6 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">সব পেলে নষ্ট জীবন</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>

        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col '>
            <img src={im9} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">মানুষ শান্তনা দেবে, শান্তি না !</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>

        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col '>
            <img src={im10} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">
            <p>বাবু নয়, স্যার</p>
          <p>আমি মুদির দোকান চালাই না</p>
          </h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>

        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col  '>
            <img src={im11} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">Tom & Jerry</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>


        <div className='flex flex-col text-center items-center'>
        <div className='flex flex-col  '>
            <img src={im12} className='h-80 w-72'/>
            <div className=''>
          <h2 className="text-xl font-bold mb-3">Scooby doo</h2>
          <p>Regular size cotton T-shirt</p>
          <p>Rs. 449</p>
          </div>
        </div>
        </div>









        

       
        
      </div>
      </div>
  
  )
}

export default Products
