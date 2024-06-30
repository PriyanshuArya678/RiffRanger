import React from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load your publishable key from the Stripe dashboard
const stripePromise = loadStripe('pk_test_51PFWuBSIbv1SZdygceAYuuZ9xYlWSJ0NB6gFlRNrxSDSrtG7d7Dc1vrm5qsyHTWN3v4O1Iyol70A6HBXHrVRHHAC002yNaQ1kQ');

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mt-10">Checkout</h1>
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-md mt-10">
        <h2 className="text-2xl mb-4">Total Amount: <span className="font-bold text-yellow-500">Rs {calculateTotal()}</span></h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Handle successful payment here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 bg-gray-700 rounded">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#ffffff',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#fa755a',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-gradient-to-r from-violet-500 via-sky-500 to-pink-500 text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 hover:scale-105"
      >
        Pay
      </button>
    </form>
  );
};

export default Checkout;
