import {React,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import CommunityBox from './CommunityBox';
import axios from 'axios'
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
        const response = await axios.get(`http://localhost:3000/community/?page=${page}`)
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
    console.log(userStatus.userStatus.loggedIn)
  },[page])
  return (
    <div className='bg-color1 h-screen'>
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
  );
}
