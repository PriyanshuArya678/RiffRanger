import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity } from '../Store/cartSlice';

import Lottie from "lottie-react";
import Ani from "../assets/MyAni7.json";


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity({ id: itemId }));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity({ id: itemId }));
  };
  
  return (
    <div className='bg-black text-white h-full p-8'>
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      <div className="mb-4">
        <p className="text-xl text-black font-semibold bg-teal-300 w-[30%] lg:w-[30%] h-[4rem] p-4">Total: Rs {totalPrice}</p>
      </div>
      {cartItems.length === 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <p className="text-4xl font-bold">Your cart is empty</p>
          <Link to='/Store'><button
  class=" mt-10 border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >STORE</span
  >
</button>

</Link>
    <div className='lg:w-[40%] w-[50%]  justify-center items-center '>
    <Lottie animationData={Ani}></Lottie>
        
      </div> </div>
         ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4 border border-white rounded-lg p-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h5 className="text-xl font-bold">{item.name}</h5>
                <p className="text-lg">Price: Rs {item.price}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded">-</button>
                  <span className="mx-2 text-xl">{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded">+</button>
                </div>
              </div>
              <button onClick={() => handleRemoveFromCart(item)} className="ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button>
            </div>
          ))}
          {/* "Buy Now" button */}
          <Link to={`Checkout`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center mt-4">
            Buy Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
