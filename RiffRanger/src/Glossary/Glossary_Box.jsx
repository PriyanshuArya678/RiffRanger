// Glossary_Box.js
import React, { useState } from 'react';
import axios from 'axios';

function Glossary_Box({ alphabet, musicTerms }) {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [termMeaning, setTermMeaning] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dictionaryAPIKey = '07628e4b-78b1-4e82-bb45-0a235b724f20'; // Replace with your Merriam-Webster API key

  // Fetch the meaning of the term
  const fetchMeaning = async (term) => {
    try {
      const response = await axios.get(
        `https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=${dictionaryAPIKey}`
      );
      const data = response.data[0].shortdef;
      setSelectedTerm(term);
      setTermMeaning(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching meaning:', error);
      setTermMeaning(['Meaning not found']);
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTerm(null);
    setTermMeaning(null);
  };

  return (
    <div className='p-4'>
      <div className='text-xl p-3 bg-color1 text-white flex justify-center'>{alphabet}</div>
      <div className='flex flex-col items-center'>
        {musicTerms.map((term, index) => (
          <button
            key={index}
            onClick={() => fetchMeaning(term)}
            className='text-lg p-2 m-1 text-white hover:bg-purple-700 rounded transition duration-300 ease-in-out'
          >
            {term}
          </button>
        ))}
      </div>

      {/* Modal for showing the meaning */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">{selectedTerm}</h2>
            <p>{termMeaning ? termMeaning.join(', ') : 'Loading...'}</p>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Glossary_Box;
