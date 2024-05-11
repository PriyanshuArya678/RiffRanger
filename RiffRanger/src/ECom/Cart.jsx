import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.items.map(item => (
            <div key={item.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: Rs {item.price}</p>
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
