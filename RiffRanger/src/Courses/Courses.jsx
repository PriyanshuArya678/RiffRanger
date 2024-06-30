import React, { useEffect, useState } from 'react';
import './Courses.css'; 
import axios from 'axios';
import Ani from "../assets/Ani4.json";
import Ani1 from "../assets/Ani5.json";
import Ani2 from "../assets/Ani6.json";
import {useSelector} from 'react-redux'
import Lottie from 'lottie-react';
import Ani3 from '../assets/MyAni4.json'
import {Link} from 'react-router-dom'


function Courses() {
  const userStatus=useSelector(state=>state.userStatus)
  const style ={
   width:"600px"
  }
  const style1 ={
    width:"400px"
   }

  const majorTopics = [
    {
      'majorTopics':'Learn the Basics',
      'subTopics': [
        'Introduction to the Guitar',
        'Parts of the Guitar',
        'Tuning the Guitar',
        'Basic Guitar Maintenance',
        'Proper Posture and Hand Position',
        'Understanding Guitar Notation',
        'Basic Music Theory for Guitarists'
      ]
    },
    {
      'majorTopics':'Fundamental Techniques',
      'subTopics': [
        'Strumming Patterns',
        'Fingerpicking Techniques',
        'Common Chords (Open and Barre)',
        'Chord Progressions',
        'Basic Rhythm and Timing',
        'Playing Scales and Exercises',
        'Developing Dexterity and Coordination'
      ]
    },
    {
      'majorTopics':'Styles and Genres',
      'subTopics': [
        'Introduction to Different Guitar Styles (e.g., Classical, Acoustic, Electric)',
        'Exploring Various Musical Genres (e.g., Rock, Blues, Jazz, Folk)',
        'Learning Signature Techniques for Different Styles',
        'Studying Influential Guitarists and Their Playing Styles',
        'Understanding the Role of the Guitar in Different Genres'
      ]
    },
    { 
      'majorTopics':'Music Theory for Guitarists',
      'subTopics': [
        'Understanding Chord Construction',
        'Building and Analyzing Chord Progressions',
        'Learning the Major and Minor Scales',
        'Understanding Modes and their Applications',
        'Introduction to Harmony and Melody',
        'Transposing Songs to Different Keys',
        'Ear Training and Improvisation'
      ]
    },
    {
      'majorTopics':'Advanced Techniques',
      'subTopics': [
        'Advanced Fingerpicking Patterns',
        'Advanced Strumming Techniques (e.g., Flamenco Strumming)',
        'Sweep Picking and Arpeggios',
        'Advanced Chord Voicings and Extensions',
        'Modal Playing and Soloing',
        'Advanced Music Theory Concepts',
        'Developing a Unique Playing Style'
      ]
    },
    {
      'majorTopics':'Guitar Gear and Equipment',
      'subTopics': [
        'Choosing the Right Guitar for Your Style and Budget',
        'Understanding Different Types of Guitars (e.g., Acoustic, Electric, Bass)',
        'Guitar Accessories and Essentials',
        'Amplifiers and Effects Pedals',
        'Guitar Maintenance and Care',
        'Recording and Studio Gear',
        'Live Performance Setup and Gear'
      ]
    },
    {
      'majorTopics':'Performance and Practice Tips',
      'subTopics':[
        'Effective Practice Routines',
        'Setting and Achieving Musical Goals',
        'Preparing for Performances and Auditions',
        'Overcoming Stage Fright',
        'Tips for Jamming and Playing with Others',
        'Developing Your Own Repertoire',
        'Staying Inspired and Motivated'
      ]
    }
  ];
  const [loggedIn,setLoggedIn]=useState(false)
  const [expanded, setExpanded] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function expandTopic(majorTopic) {
    setExpanded(expanded === majorTopic ? null : majorTopic);
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div className='bg-color1'>
      {
        !userStatus.userStatus.loggedIn?
        <div className=' flex flex-col items-center  lg:ml-24 p-4'>
      <div className='border-b-2 border-green-500 text-white text-2xl sm:text-4xl lg:text-4xl font-bold inline-block'>
          OUR <span className='text-green-500'>COURSES</span>
        </div>
        
      <div className='flex flex-col sm:justify-center items-center lg:flex-row-reverse'>
      <div className='sm:w-[30%] lg:w-[30%]'>
        <Lottie animationData={Ani3} />
      </div>
      <div className=' w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:ml-8 mt-8'>
        <p className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
        Learn Guitar from Scratch!
        </p>
        <p className="text-white text-lg text-center lg:text-left mb-4 px-4 lg:px-0">
        Discover our comprehensive guitar courses, designed for all skill levels. Whether you're a beginner or an advanced player, explore a variety of lessons to master chords, techniques, and songs. Start your musical journey today and unlock your potential with our expert instructors and engaging content. Dive into the world of guitar!</p>
        <div className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
          <span className='text-green-400'>LOGIN</span > TO BEGIN!!!         </div>
          
        <Link to='/login'><button
  class="border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white  rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Hover me!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-green-800 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >LOGIN</span
  >
</button>
</Link>
      </div>
    </div>
      </div>
        :
        <div className='flex flex-col'>
          <div  >
            <div className='flex flex-col items-center'>
              <div className='text-white text-6xl font-bold'>OUR <span className='text-blue-400'>COURSES</span></div>
              <div className='text-white grid items-center lg:grid-cols-2 lg:text-2xl'>
                <Lottie style={style} animationData={Ani} className="hidden md:block lg-block ml-10"/>
                <div className='font-thin'>"Explore our comprehensive guitar courses designed for all skill levels. Learn the basics, master advanced techniques, and dive into various styles and genres. Click on each topic to discover detailed lessons and watch engaging tutorial videos. Start your musical journey with us today!</div>
                </div>
              <div>
                <Lottie style={style1} animationData={Ani1} className="hidden md:block lg:block ml-10"/>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-start m-10 lg:border rounded-lg'>
            <div className='w-[40%]'>
              {majorTopics.map((val, index) => (
                <div key={index} className='flex flex-col font-bold'>
                  <button onClick={() => expandTopic(val.majorTopics)} className='text-white mt-3 bg-[#313532] py-2 border border-teal-400'>
                    {val.majorTopics}
                  </button>
                  {expanded === val.majorTopics && (
                    <div className='border p-3'>
                      <div className='flex flex-col bg-color1'>
                        {val.subTopics.map((subTopic, subIndex) => (
                          <button onClick={openModal} className='text-white bg-[#191919] border border-purple-400 py-2 m-2' key={subIndex}>{subTopic}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {modalOpen && (
                <div className="modal ">
                  <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-X84GG06g-c" frameborder="2" allowfullscreen></iframe>
                  </div>
                </div>
              )}
            </div>
            <div className='ml-20'>
              <Lottie style={style1} animationData={Ani2} className="hidden md:block lg-block"/>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Courses;
