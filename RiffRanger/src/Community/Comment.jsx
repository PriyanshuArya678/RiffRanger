import React, { useEffect ,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Comment() {
  const [commentContent, setCommentContent] = useState('');
  const userStatus=useSelector(state=>state.userStatus)
  const dispatch = useDispatch();
  const navigate =useNavigate()
    const addPost= async()=>{
      try {
        const response = await axios.post('http://localhost:3000/community/comment?page=0', {
          userName: userStatus.userStatus.userName,
          comment: commentContent
        });
        navigate('/community')
      } catch (error) {
        console.error(error);
      }   
    }
   
  return (
    <div  className='bg-color1 h-screen'>
      <div className='flex flex-col'>
        <div className='text-white flex flex-row justify-center'>POST YOUR COMMENT</div>
        <textarea onChange={e => setCommentContent(e.target.value)} className='h-[700px] border m-10 bg-color1 border-purple-400 text-white p-10'>
        </textarea>
        <button onClick={addPost} className='text-white flex flex-row justify-center border w-1/5 ml-12'>
            POST
        </button>
      </div>
    </div>
  )
}
