import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im1 from '/public/banner_images/bannerimg1.avif';
import im2 from '/public/banner_images/bannerimg2.avif';
import im3 from '/public/banner_images/bannerimg3.avif';
import im4 from '/public/banner_images/bannerimg4.avif';


// Arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ ...arrowStyles, right: '10px' }}
      onClick={onClick}
    >
      ➡
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ ...arrowStyles, left: '10px' }}
      onClick={onClick}
    >
      ⬅
    </div>
  );
}

const arrowStyles = {
  display: 'block',
  color: 'white',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  zIndex: 2,
};

// Banner component
export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="h-[100vh]">
      {/* Slide 1 */}
        

      <div className='relative h-[100vh]'>
        <img
          src={im1}
          alt="Random Technology"
          className="w-full h-full object-cover"
        />
        <div className="text-white p-8 text-center justify-center items-center left-0 right-0 absolute top-64">
          <h1 className="text-3xl font-bold text-yellow-400">Our Amazing Services</h1>
          <p className="mt-4 text-red-800 font-bold">Bringing innovation to your door.</p>
        </div>
      </div>

      <div className='relative h-[100vh]'>
        <img
          src={im2}
          alt="Random Business"
          className="w-full h-full object-cover"
        />
        <div className="text-white p-8 text-center justify-center items-center left-0 right-0 absolute top-64">
          <h1 className="text-3xl font-bold">Why Choose Us?</h1>
          <p className="mt-4">We guarantee the best results.</p>
        </div>
      </div>

      <div className='relative h-[100vh]'>
        <img
          src={im3}
          alt="Random Business"
          className="w-full h-full object-cover"
        />
        <div className="text-white p-8 text-center justify-center items-center left-0 right-0 absolute top-64">
          <h1 className="text-3xl font-bold">Why Choose Us?</h1>
          <p className="mt-4">We guarantee the best results.</p>
        </div>
      </div>

      <div className='relative h-[100vh]'>
        <img
          src={im4}
          alt="Random Business"
          className="w-full h-full object-cover"
        />
        <div className="text-white p-8 text-center justify-center items-center left-0 right-0 absolute top-64">
          <h1 className="text-3xl font-bold">Why Choose Us?</h1>
          <p className="mt-4">We guarantee the best results.</p>
        </div>
        </div>

        
       
        
    </Slider>
  );
}
