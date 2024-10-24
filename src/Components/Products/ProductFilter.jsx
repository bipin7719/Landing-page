import React, { useState } from 'react'


const ProductFilter = () => {
    const [value, setValue]= useState(0);
  return (
    <div className='w-1/4 px-24 py-12 bg-yellow-200'>
      <h2 className='font-bold text-xl'>Categories</h2>
      <div className='mt-2'>
        <label> 
            <input type='checkbox' className='' /> Men
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/> Women
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className='' /> Unisex
        </label>
      </div>

      <h2 className='font-bold text-xl mt-4 '>Size Chart</h2>
      <div className='mt-2'>
        <label> 
            <input type='checkbox' className='' /> XS
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/> S
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className='' /> M
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/> L
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/> XL
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/> XXL
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/> XXXL
        </label>
      </div>

      <h2 className='font-bold text-xl mt-4 '>Size Categories</h2>
      <div className='mt-2'>
        <label> 
            <input type='checkbox' className='' />Regular Size
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/>OverSized
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className='' />Full-Sleeves
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className='' />Half-Sleeves
        </label>
      </div>


      <h2 className='font-bold text-xl mt-4'>Featured Collection</h2>
      <div className='mt-2'>
        <label> 
            <input type='checkbox' className='' />  Band's Collections
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className=''/> Graphics Collections
        </label>
      </div>
      <div>
        <label>
            <input type='checkbox' className='' /> Bangla-Font Collections
        </label>
      </div>
      {/* <h2 className='font-bold text-xl'>Price</h2>
      <div className='flex items-center'>
      <input type='range' min='449' max='1000' value={value} onChange={(e)=>setValue(e.target.value) }/>
      <span className='font-bold text-center'>{value}</span>

      </div> */}

<h2 className='font-bold text-xl mt-4'>Price</h2>
      <div className='mt-2'>
        <label> 
            <input type='radio' className='' /> Rs. 349 to Rs. 449
        </label>
      </div>
      <div>
        <label>
            <input type='radio' className=''/> Rs. 549 to Rs. 649
        </label>
      </div>
      <div>
        <label>
            <input type='radio' className='' /> Rs. 699 to Rs. 999
        </label>
      </div>
    </div>
  )
}

export default ProductFilter
