import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const { ref: usersRef, inView: usersInView } = useInView({ triggerOnce: true });
  const { ref: reviewsRef, inView: reviewsInView } = useInView({ triggerOnce: true });
  const { ref: ordersRef, inView: ordersInView } = useInView({ triggerOnce: true });

  return (
    <div className="md:flex justify-around gap-28 text-white p-10 bg-black">
      <div className="text-center">
        <h2 className="sm:text-4xl  font-bold ">Registered Users</h2>
        <div ref={usersRef}>
          {usersInView && <CountUp end={10000} duration={3} className="text-5xl lg:text-6xl font-bold text-blue-500" />}<span className='text-6xl font-bold text-blue-500'>+</span>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl sm:text-4xl font-bold">5 Star Reviews</h2>
        <div ref={reviewsRef}>
          {reviewsInView && <CountUp end={500} duration={3} className="text-5xl lg:text-6xl font-bold text-blue-500" />}<span className='text-6xl font-bold text-blue-500'>+</span>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl  font-bold">Daily Orders</h2>
        <div ref={ordersRef}>
          {ordersInView && <CountUp end={300} duration={3} className="text-5xl font-bold text-blue-500" />}<span className='text-6xl font-bold text-blue-500'>+</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
