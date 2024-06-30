import React, { useState, useEffect } from 'react';
import image from './assets/images (2).jpeg';
import image1 from './assets/download.jpg';
import image2 from '../assets/G(img).jpg'
import image3 from './assets/G(img2).jpg';
import image4 from './assets/G(img3).avif';
import image5 from './assets/G(img4).jpg'
import image6 from './assets/G(img5).jpg'



import img from './assets/M(img).jpg'
import img1 from './assets/M(img1).jpg'
import img2 from './assets/M(img2).jpg'
import img3 from './assets/M(img3).jpg'
import img4 from './assets/M(img4).jpg'
import img5 from './assets/M(img5).jpg'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/cartSlice';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [activeItems, setActiveItems] = useState("instruments"); // Default active items

  const cartItems = useSelector(state => state.cart);
  const wishlistItems = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.items.length);
    setWishlistCount(wishlistItems.items.length);
  }, [cartItems, wishlistItems]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const items = [
    {
      id: 1,
      name: "Spanish Guitar",
      description: "A beautiful Spanish-style acoustic guitar.",
      price: 7000,
      image: image,
      quantity: 1,
    },
    {
      id: 2,
      name: "German Guitar",
      description: "A classical German acoustic guitar.",
      price: 9001,
      image: image6,
      quantity: 1,
    },
    {
      id: 3,
      name: "Electric Guitar",
      description: "A latest electric guitar.",
      price: 14401,
      image: image5,
      quantity: 1,
    },
    {
      id: 4,
      name: "Russian Guitar",
      description: "A traditional Russian acoustic guitar.",
      price: 16001,
      image: image2,
      quantity: 1,
    },
    {
      id: 5,
      name: "Yamaha Guitar",
      description: "A traditional Russian acoustic guitar.",
      price: 10001,
      image: image3,
      quantity: 1,
    },
    {
      id: 6,
      name: "Russian Guitar",
      description: "A traditional Russian acoustic guitar.",
      price: 6001,
      image: image4,
      quantity: 1,
    }
  ];

  const items1 = [
    {
      id: 7,
      name: "G-3",
      description: "Modern electric guitar model G-3.",
      price: 6000,
      image: img,
      quantity: 1,
    },
    {
      id: 8,
      name: "G-2",
      description: "Electric guitar model G-2 with advanced features.",
      price: 6001,
      image: img1,
      quantity: 1,
    },
    {
      id: 9,
      name: "G-1",
      description: "Entry-level electric guitar model G-1.",
      price: 6001,
      image: img2,
      quantity: 1,
    }
    ,
    {
      id: 10,
      name: "G-1",
      description: "Entry-level electric guitar model G-1.",
      price: 6001,
      image: img3,
      quantity: 1,
    },
    ,
    {
      id: 11,
      name: "G-1",
      description: "Entry-level electric guitar model G-1.",
      price: 6001,
      image: img4,
      quantity: 1,
    },
    {
      id: 12,
      name: "G-1",
      description: "Entry-level electric guitar model G-1.",
      price: 6001,
      image: img5,
      quantity: 1,
    }
  ];

  return (
    <div className='bg-blue min-h-screen flex flex-col lg:flex-row'>

      <div className='lg:w-1/4 p-6'>
        <div className='flex flex-col items-center lg:items-start'>
          <button 
            onClick={() => setActiveItems("instruments")} 
            className="w-full py-3 mt-4 text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
            INSTRUMENTS
          </button>
          <button 
            onClick={() => setActiveItems("rangerMerch")} 
            className="w-full py-3 mt-4 text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
            RANGER-MERCH
          </button>
         
          <div className='flex flex-col items-center lg:items-start mt-10'>
            <button className="w-full py-3 text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
              WISHLIST ({wishlistCount})
            </button>
            <Link to={'Cart'} className="w-[10rem] py-3 mt-4 text-center text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
              CART ({cartCount})
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center lg:justify-start lg:w-3/4 p-6'>
        {(activeItems === "instruments" ? items : items1).map((item) => (
          <div key={item.id} className='bg-purple-300 rounded-lg shadow-lg m-4 p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
            <img src={item.image} alt={item.name} className='w-full h-48 object-cover rounded-t-lg' />
            <div className='p-4'>
              <h3 className='text-center text-black font-semibold mb-2'>{item.name}</h3>
              <p className='text-center text-gray-600 mb-4'>{item.description}</p>
              <p className='text-center text-black mb-4'>PRICE: Rs {item.price}</p>
              <div className='flex justify-around'>
                <button 
                  onClick={() => handleAddToCart(item)} 
                  className="px-4 py-2 border-2 border-black text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
                  ADD TO CART
                </button>
              </div>
              <div className='flex justify-around mt-2'>
                <button 
                  onClick={() => handleAddToWishlist(item)} 
                  className="px-4 py-2 border-2 border-black text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
