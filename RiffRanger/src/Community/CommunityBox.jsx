import React from 'react'

export default function CommunityBox({userName,Date,comment}) {
  return (
    <div>
      <div className='flex flex-col border m-10 rounded-lg'>
            <div className='flex flex-col justify-start m-2 border p-2 rounded-lg'>
              <div className='text-white'>{userName}</div>
              <div className='text-white'>{Date}</div>
            </div>
            <div className='text-white p-2'>{comment}</div>
            <div className='text-white border w-24 rounded-lg m-2 p-1  hover:bg-purple-700'>reply</div>
          </div>
    </div>
  )
}
