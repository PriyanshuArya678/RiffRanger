import React from 'react';

const Card = ({ item, handleAddToCart }) => {
  return (
    <div className='card bg-white lg:p-4 p-2 m-4 rounded-lg shadow-md'>
      {item.image && <img src={item.image} alt={item.name} className='w-full w-10 lg:h-40 h-20 object-cover rounded-t-lg' />}
      <div className='lg:p-2'>
        <h2 className='lg:text-xl font-bold'>{item.name}</h2>
        <p className='text-gray-600'>Price: ₹{item.price}</p>
        <button className='text-white bg-black w-28 border rounded-lg' onClick={() => handleAddToCart(item)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
