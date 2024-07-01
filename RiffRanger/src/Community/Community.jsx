import {React,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import CommunityBox from './CommunityBox';
import axios from 'axios'
import Lottie from 'lottie-react';
import Ani from '../assets/MyAni5.json'
import './Community.css'
import { push,cleanup } from '../Store/commentsSlice';
export default function Community() {
  const [commentList ,setCommentList]=useState('')
  const comments=useSelector(state=>state.commentStatus)
  const userStatus=useSelector(state=>state.userStatus)
  const dispatch =useDispatch()
  const [refresh ,setRefresh]=useState(false)
  const [page,setPage]=useState(0)
  useEffect(()=>{
    const addPost= async()=>{
      dispatch(cleanup())
      try {
        const response = await axios.get(`https://riffranger-1.onrender.com/community/?page=${page}`)
        const comments = response.data.comment;
        console.log(comments)
        comments.forEach(comment => {
          const dateString = comment.Date;
          const date = new Date(dateString);
      
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "Asia/Kolkata"
          };
      
          const formatter = new Intl.DateTimeFormat("en-IN", options);
          const formattedDate = formatter.format(date);
          dispatch(push({userName:comment.Username ,comment:comment.Comment,date:formattedDate}))
        });

      } catch (error) {
        console.error(error);
      }     
    }
    addPost()
  },[page])
  return (
    <div>
      {
        !userStatus.userStatus.loggedIn? 
        <div className=' flex flex-col items-center  lg:ml-24 p-4'>
        <div className='border-b-2 border-blue-700 text-white text-2xl sm:text-4xl lg:text-4xl font-bold inline-block'>
            OUR <span className='text-blue-700'>COMMUNITY</span>
          </div>
          
        <div className='flex flex-col sm:justify-center items-center lg:flex-row'>
        <div className='sm:w-[30%] lg:w-[40%]'>
          <Lottie animationData={Ani} />
        </div>
        <div className=' w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:ml-8 mt-8'>
          <p className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
          Join the Riff-Community!
          </p>
          <p className="text-white text-lg text-center lg:text-left mb-4 px-4 lg:px-0">
          Join our vibrant community section to connect with fellow guitar enthusiasts! Share your thoughts through comments and blogs, exchange tips, and engage in lively chats. Whether you're seeking advice, inspiration, or camaraderie, our community is here to support your musical journey. Come join the conversation and be part of our guitar family!</p>
          <div className="font-bold text-3xl text-white mb-4 text-center lg:text-left">
          <span className='text-blue-600'>LOGIN</span > TO BEGIN!!!         </div>
          <Link to='/login'><button
    class="border border-white overflow-hidden relative w-32 p-2 h-12 bg-black text-white  rounded-md text-xl font-bold cursor-pointer relative z-10 group"
  >
    Hover me!
    <span
      class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
    ></span>
    <span
      class="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
    ></span>
    <span
      class="absolute w-36 h-32 -top-8 -left-2 bg-blue-800 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
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
        <div id= 'body' className='bg-black  '>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-center font-bold text-3xl text-white mt-5'>
          Our Community
        </div>
        <div className='text-xl text-white mt-5 m-5'>
          This is a great way to get started in our guitarist community, please say hello and introduce yourself to the other members! Remember that communicating with other members is a quick way to monitor your progress and maintain momentum. Please use the comment section below to introduce yourself! Where are you from? How did you get started playing guitar?
        </div>
        <div className='flex flex-row items-center'>
          <Link to={'comment'} className='text-white border border-purple-300 py-10 px-16 w-1/3 m-10'>
            Enter your comment....
          </Link>
          <button className='text-white mt-5 hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>
            Or Read Our Blogs
          </button>
        </div>
        <div >
          {
            comments.comments.map((comment)=> <CommunityBox userName={comment.userName} Date={comment.date} comment={comment.comment}/>)
          }
        </div>
        <div className='flex flex-row justify-evenly m-10'>
        <button onClick={() => setPage(prevPage => {
          if(prevPage>0){
           prevPage - 1
          }
          })} className='text-white  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>prev</button>
        <button onClick={() => setPage(prevPage => prevPage + 1)} className='text-white  hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300 ease-in-out'>next</button>
        </div>
        
      </div>
    </div>
      }
    </div>
    
  );
}
