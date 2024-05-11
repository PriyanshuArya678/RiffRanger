import React, { useState } from 'react';
import image from './assets/images (2).jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/cartSlice';
import { addTowishlist } from '../Store/wishlistSlice';
import  { Link } from 'react-router-dom'
const Landing = () => {
  const cartitems=useSelector(state=>state.cart);
  const wishlistitems=useSelector(state=>state.wishlist);

  const dispatch=useDispatch();
  console.log(cartitems);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToWishlist = (item) => {
    dispatch(addTowishlist(item));
    setWishlistCount(wishlistitems.items.length)
  };

  const handleAddToCart = (item) => {
      dispatch(addToCart(item));
      setCartCount(cartitems.items.length);
  };
  const items = [
    {
      id: 1,
      name: "Spanish Guitar",
      price: 6000,
      image: image, 
    },
    {
      id:2,
      name:"German Guitar",
      price:6001,
      image:image,
    },
    {
      id:3,
      name:"Russian Guitar",
      price:6001,
      image:image,
    }
  ];
  const items1 = [
    {
      id: 1,
      name: "Guitar",
      price: 6000,
      image: image, 
    },
    {
      id:2,
      name:"Guitar",
      price:6001,
      image:image,
    },
    {
      id:3,
      name:"Guitar",
      price:6001,
      image:image,
    }
  ];
  

  return (
    <div className='bg-black h-full flex'>
     
      <div className='float-left flex flex-col font-semibold border justify-start items-center h-[80%] md:w-[35%] sm:w-[50%] lg:w-[20%] '>
        <button className="mx-auto p-4 rounded-lg shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800"> RANGER-MERCH</button>
        <button className="mx-auto p-4 rounded-lg shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800"> INSTRUMENTS</button>
        <button className="mx-auto p-4 rounded-lg shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800"> COURSES</button>
        <div className='flex flex-col mt-[20%] mr-10'>
          <button  className="mx-auto p-4 border md:w-64 ml-10 shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-64">WISHLIST ({wishlistCount})</button>
          <Link to ={'Cart'} className="p-4 border md:w-64 ml-10 mb-10 shadow-lg mt-10 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-64">CART({cartCount})</Link>
        </div>
      </div>
      <div className='flex'>
  {items.map((item) => (
    <div key={item.id} className='ml-8 border h-[73%]'>
      <div className='w-64'>
        <img src={item.image} alt="landing" className='' />
      </div>
      <div className='text-white ml-2 flex flex-col'>
        <span className='flex justify-center items-center'>{item.name}</span>
        <span className='flex justify-center items-center'>PRICE : Rs {item.price}</span>
        <button onClick={()=>handleAddToWishlist(item)} className="ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
        <button onClick={() => handleAddToCart(item)} className="ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
        <div className="flex items-center"></div>
      </div>
    </div>
  ))}
  {items.map((items1) => (
    <div key={items.id} className='ml-8 border h-[73%]'>
      <div className='w-64'>
        <img src={items1.image} alt="landing" className='' />
      </div>
      <div className='text-white ml-2 flex flex-col'>
        <span className='flex justify-center items-center'>{items1.name}</span>
        <span className='flex justify-center items-center'>PRICE : Rs {items1.price}</span>
        <button onClick={()=>handleAddToWishlist(items1)} className="ml-10 shadow-lg mt-8 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO WISHLIST</button>
        <button onClick={() => handleAddToCart(items1)} className="ml-10 shadow-lg mt-8 mb-2 bg-gradient-to-r text-white hover:scale-105 transition duration-150 hover:bg-purple-800 sm:w-40">ADD TO CART</button>
        <div className="flex items-center"></div>
      </div>
    </div>
  ))}
</div>
      </div>
    
  );
}

export default Landing;
