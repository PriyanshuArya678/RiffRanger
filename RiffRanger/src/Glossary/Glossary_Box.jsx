import React from 'react'

function Glossary_Box({alphabet,musicTerms}) {
    const fetchMeaning=(term)=>{
        fetch(`http://localhost:4000/musicTerm/${term}`)
        .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch meaning');
            }
            // Parse the JSON data
            return response.json();
        })
        .then((data) => {
            var data=data// Log or handle the fetched data
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors
            console.error('Error fetching meaning:', error);
        });
    }
  return (
    <div className=''>
      <div className='text-xl p-3 bg-light-green'>{alphabet}</div>
      <div className='flex flex-col'>{musicTerms.map((term,index)=>(
        <button onClick={() => fetchMeaning(term)}className='text-lg p-2' key={index}>{term}</button>
      ))}</div>
    </div>
  )
}

export default Glossary_Box
