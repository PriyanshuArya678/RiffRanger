import React, { useState } from 'react';
import image from './assets/images (2).jpeg';

const Landing = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className='bg-black h-full flex'>
      <div className='flex flex-col'></div>
      <div className='float-left flex flex-col font-semibold border justify-start items-center h-[80%] md:w-[35%] sm:w-[50%] lg:w-[20%] '>
        <button className="mx-auto p-4 rounded-lg shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800"> RANGER-MERCH</button>
        <button className="mx-auto p-4 rounded-lg shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800"> INSTRUMENTS</button>
        <button className="mx-auto p-4 rounded-lg shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800"> COURSES</button>
        <div className='flex flex-col mt-[20%] mr-10'>
          <button  className="mx-auto p-4 border md:w-64 ml-10 shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-64">WISHLIST ({wishlistCount})</button>
          <button  className="mx-auto p-4 border md:w-64 ml-10 mb-10 shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-64">CART ({cartCount})</button>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
       <div className='flex'>
       <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button  onClick={handleAddToWishlist} className=" ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button onClick={handleAddToCart} className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
            <div className="flex items-center">
             </div>
          </div>
        </div>
        <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button onClick={handleAddToCart} className="  ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button onClick={handleAddToCart} className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
            <div className="flex items-center">
             </div>
          </div>
          
        </div>
        <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button onClick={handleAddToCart} className="  ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button onClick={handleAddToCart} className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
            <div className="flex items-center">
             </div>
          </div>
        </div>
        <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button className="  ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
             <div className="flex items-center">
             </div>
          </div>
        </div>
       </div>
       <div className='flex'>
       <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button className="  ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
            <div className="flex items-center">
             </div>
          </div>
        </div>
        <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button className="  ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
            <div className="flex items-center">
             </div>
          </div>
          
        </div>
        <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button className="  ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
            <div className="flex items-center">
             </div>
          </div>
        </div>
        <div className='ml-8 border h-[100%]'>
          <div className='w-64'>
            <img src={image} alt="landing" className='' />
          </div>
          <div className='text-white ml-2 flex flex-col'>
            <span className='flex justify-center items-center'>SPANISH GUITAR</span>
            <span className='flex justify-center items-center'>PRICE : Rs 6000</span>
            <button className="  ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
            <button className="   ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
             <div className="flex items-center">
             </div>
          </div>
        </div>

       </div>
      </div>
    </div>
  );
}

export default Landing;
