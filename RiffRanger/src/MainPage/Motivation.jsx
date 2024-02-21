import React from 'react';
import bg from '../assets/Motivation-bg-image.jpg';
import image1 from '../assets/image1.jpg';

function Motivation() {
  return (
    <div className='relative min-h-screen'>
      <img className='absolute inset-0 w-full h-full object-cover' src={bg} alt="" />
      <div className='absolute inset-0 flex flex-col justify-start items-start text-white p-8'>
        <div className='bg-opacity-50 p-4 rounded-lg mb-4 text-3xl'>OVERCOME YOUR GUITAR STRUGGLES</div>
        <div className='bg-orange-900 w-2/3 bg-opacity-50 p-4 rounded-lg m-12'>
          <h2 className='text-2xl text-wrap'>I am too old to learn guitar</h2>
          <p>It's never too late to learn guitar! Embrace the challenge for personal fulfillment, stress relief, and brain health. Connect with a vibrant musical community and enjoy the flexibility of learning at your own pace.</p>
        </div>
        <div className='flex flex-row'>
        <div className='bg-orange-900 w-2/3 bg-opacity-50 p-4 rounded-lg self-end ml-auto '>
          <h2 className='text-2xl '>I am not improving my guitar skills</h2>
          <p>To enhance your guitar skills, try setting specific goals, practicing regularly, and seeking feedback from experienced musicians. Explore new techniques, styles, and songs to keep your practice sessions engaging. Consider taking lessons from a skilled instructor or joining a supportive community of guitarists for motivation and inspiration.</p>
        </div>
        
        </div>
        <div className='bg-orange-900 w-2/3 bg-opacity-50 p-4 rounded-lg m-12 ml-12'>
          <h2 className='text-2xl '>I struggle with barre chords</h2>
          <p>Barre chords can be challenging, but with consistent practice and proper technique, you can improve. Start by focusing on your hand position and ensuring that your index finger presses down firmly across the fretboard. Strengthen your hand muscles with exercises like finger stretches and chord transitions.</p>
        </div>
        <div className='bg-orange-900 w-2/3 bg-opacity-50 p-4 rounded-lg mb-4 self-end ml-auto'>
          <h2 className='text-2xl'>I’m left-handed and lack resources</h2>
          <p>Being left-handed can pose challenges in finding resources tailored to your needs, but many resources offer guidance for left-handed players. Look for left-handed chord charts, tutorials, and instructional videos online.</p>
        </div>
      </div>
    </div>
  );
}

export default Motivation;
