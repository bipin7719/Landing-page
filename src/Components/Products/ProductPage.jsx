import React from 'react'
import ProductFilter from './ProductFilter'
import Products from './Products'

const ProductPage = () => {
  return (
    <div >
        <div className='flex'>
            <ProductFilter />
            <Products />
            
        </div>
      
    </div>
  )
}

export default ProductPage
