import React, { useEffect, useState } from 'react';
import mainImage from '../assets/main_image.png';
// import '../body.css';
import Motivation from './Motivation';
import Lottie from "lottie-react";
import Ani from "../assets/Ani3.json";
import { Link } from 'react-router-dom';
import Ani1 from '../assets/MyAni1.json'
import Ani2 from '../assets/MyAni2.json'
import Ani3 from '../assets/myANi3.json'
import Footer from './Footer';

export default function Body() {
  const style ={
    width:"600px"
  }
  const scrollToSection = () => {
    const section = document.getElementById('course');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Function to check if the screen size is smaller than the small breakpoint
  // const isSmallScreen = () => {
  //   return window.matchMedia("(max-width: 640px)").matches;
  // };

  return (
    <div className=' bg-black '>
      <div className="grid md:grid-cols-2 md:items-center">
      
      {/* {!isSmallScreen() && <Lottie style={style} animationData={Ani}/>} */}
          <div className='ml-10 '>
          <div className=''>
            <div className=" text-white text-4xl p-2 lg:text-8xl font-semibold">
              LEARN AND MASTER THE ART OF <span className="text-blue-400">GUITAR</span>
            </div>
            <div className='text-white mt-10 text-xl lg:text-2xl text-center'>
              Songs. Techniques. Rhythm. Games. Chords. Practice Tools. From Beginner to Advanced!
              Songs. Techniques. Rhythm. Games. Chords. Practice Tools. From Beginner to Advanced!
              
            </div>
            
            <div className="text-white flex  justify-center">
            <button
  class=" float-left text-xl font-bold mt-10 relative py-4 px-12 sm:w-[40%] lg:w-[45%] rounded-md bg-white isolation-auto z-10 border-2 border-blue-400 before:absolute before:w-[50%] before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#3f70ec] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
  onClick={scrollToSection}>
 GET STARTED
</button>{/* <button className="py-6 px-8 mt-4 rounded-lg float-start bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary font-bold transition-colors "> GO TO BLOGS</button>
           */}
            </div>
          </div>
        </div>
        <div>
        <Lottie animationData={Ani} className=" lg:w[50%] ml-10"/>
        
        </div>
       
      </div>
      {/* <div>
      <p className='ml-[30%] mt-20 text-6xl font-bold sm:text-4xl'>OUR <span className='text-blue-500'>COURSES</span></p>
     
       <div className=' mt-20 flex sm:flex-col lg:flex-row sm:justify-center items-center'>
       
         <div className='w-[50%]'>
              <Lottie  animationData={Ani1}>
              </Lottie>
            </div>
            <div className='mt-10 sm:text-xl sm:m-10'>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, perspiciatis soluta repellat assumenda provident esse itaque porro laudantium minima eveniet.</p>
             <button
  class=" border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white  rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Explore!</span
  >
</button>

            </div>
           

      </div>
      </div> */}
       <div id='course' className=' flex flex-col items-center sm:mt-[10%] lg:ml-24 p-4'>
      <div className='border-b-2 border-blue-500 text-white  text-3xl sm:text-4xl lg:text-4xl font-bold inline-block'>
          EXPLORE OUR <span className='text-blue-500'>COURSES</span>
        </div>
        
      <div className='flex flex-col sm:justify-center items-center lg:flex-row'>
      <div className='sm:w-[40%] lg:w-[40%] '>
        <Lottie animationData={Ani1} />
      </div>
      <div className=' w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:ml-8 mt-8'>
        <p className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
           Wanna learn Guitar? We got you covered!!!
        </p>
        <p className="text-white text-lg text-center lg:text-left mb-4 px-4 lg:px-0">
          Welcome to our Courses section! Explore a diverse range of guitar courses tailored to different skill levels, from beginner to advanced. Each course offers structured lessons designed to enhance your guitar playing abilities and musical understanding.</p>
        <Link to='/Courses'><button
  class="border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white  rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Explore!</span
  >
</button>
</Link>
      </div>
    </div>
      </div>
      <div>
      <div className=' flex flex-col items-center sm:mt-[10%] lg:ml-24 p-4'>
      <div className='border-b-2 border-purple-500 text-white text-2xl sm:text-2xl lg:text-4xl font-bold inline-block'>
          TRY OUT THE <span className='text-purple-500'>SOUND GUESSING GAME</span>
        </div>
        
      <div className='flex flex-col sm:justify-center items-center lg:flex-row-reverse'>
      <div className='sm:w-[30%] lg:w-[30%]'>
        <Lottie animationData={Ani2} />
      </div>
      <div className=' w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:ml-8 mt-8'>
        <p className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
         Test Your Guitar knowledge with a quiz!!
        </p>
        <p className="text-white text-lg text-center lg:text-left mb-4 px-4 lg:px-0">
        Test your ear training and chord recognition skills with our interactive sound guessing game. Listen to chords played on the guitar and choose the correct chord from multiple options. This fun and educational game helps sharpen your musical ear and deepen your understanding of guitar chords.</p>
        <Link to='tools/soundGuessingGame'><button
  class="border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Explore!</span
  >
</button>

</Link>
      </div>
    </div>
      </div>
      </div>
      <div>
      <div>
      <div className=' flex flex-col items-center sm:mt-[10%] lg:ml-24 p-4'>
      <div className='border-b-2 border-cyan-500 text-white text-3xl sm:text-4xl lg:text-4xl font-bold inline-block'>
          HAVE A LOOK TO <span className='text-cyan-500'>GLOSSARY</span>
        </div>
        
      <div className='flex flex-col sm:justify-center items-center lg:flex-row'>
      <div className='sm:w-[30%] lg:w-[30%]'>
        <Lottie animationData={Ani3} />
      </div>
      <div className=' w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:ml-8 mt-8'>
        <p className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
         Improve your musical knowledge!!
        </p>
        <p className="text-white text-lg text-center lg:text-left mb-4 px-4 lg:px-0">
        Dive into a comprehensive glossary of guitar terms and terminology. Whether you're learning about different guitar parts, musical techniques, or styles, the glossary provides clear definitions and explanations to enrich your guitar knowledge.</p>
        <Link to='tools/glossary'><button
  class="border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white  rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-cyan-800 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Explore!</span
  >
</button>
</Link>
      </div>
    </div>
      </div>
      </div>
      <div className='mt-[10%] mb-[5%]'>
      </div>
      </div>
      <Footer/>
      </div>
  );
}
