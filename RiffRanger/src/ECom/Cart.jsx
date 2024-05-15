// Cart Component
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity } from '../Store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleremoveFromCart = (item) => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity({ id: itemId }));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity({ id: itemId }));
  };
  
  return (
    <div className='bg-black text-white h-full flex'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.itemId} className="card">
              <div className="card-body border border-white w-72 ml-10">
                <div className=''>
                  <img src={item.image} alt="landing" className='' />
                </div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: Rs {item.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <div className="button-group">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  <button onClick={() => handleremoveFromCart(item)}>Cancel</button>
                </div>
              </div>
            </div>
          ))}
          {/* "Buy Now" button */}
          <Link to={`Checkout`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
