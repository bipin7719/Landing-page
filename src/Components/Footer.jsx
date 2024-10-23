import React from 'react'
import image2 from '/public/TrendHub_logo.jpg'
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='flex flex-row bg-black'>
      
        <div className="logo mx-2">
        <img src={image2} alt="TrendHub_logo" className="h-16 w-16 rounded-full" />
        <h2 className='font-bold mb-3 mt-3'>TrendHub</h2>
      </div>
      <div className="contact mx-44 text-white">
        <p>Ampuliya para, Badurtala lane, Nabadwip</p>
        <p>Order at our Whatsapp - 8536846979</p>
        <p>Calling no - 7719228404</p>
        <p>Email - trendhub2k23@gmail.com</p>
      </div>
      <div className="business-hours">
        
      </div>
      <div className="social-media bg-white h-12 w-10">
        <a href="https://www.facebook.com/profile.php?id=100094926457276&mibextid=2JQ9oc">
        <FaFacebook />
        </a>
        <a href=" https://www.instagram.com/trendhub2k23?igsh=MTNtZGN0YW9uaTNodg==">
          <i className="Instagram"></i>
        </a>
        </div>
    
    <div className="md:w-1/2 h-80 rounded-lg overflow-hidden mt-4  justify-content-right">

      
    <iframe
      className='justify-content: space-between'
      title="Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.3609950438193!2d88.36442036955457!3d23.40832382940961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f91d58f0125f91%3A0x91f280ebb05bb275!2sTrend%20Hub!5e0!3m2!1sen!2sin!4v1726875190893!5m2!1sen!2sin" width="800" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    
      style={{ border: 0, filter: 'invert(100%)' }} // Dark theme filter
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
  </div>
  )
}
