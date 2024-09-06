import React, { useState } from 'react';

function Glossary_Box({ alphabet, musicTerms }) {
  const [selectedTerm, setSelectedTerm] = useState(null); // To store the clicked word for modal
  const [meaning, setMeaning] = useState(''); // To store the fetched meaning
  const [isModalOpen, setIsModalOpen] = useState(false); // To control the modal

  const fetchMeaning = (term) => {
    // Fetch the meaning using the dictionary API
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=07628e4b-78b1-4e82-bb45-0a235b724f20`)
      .then((response) => response.json())
      .then((data) => {
        setMeaning(data[0].shortdef ? data[0].shortdef.join(', ') : 'Meaning not found');
        setSelectedTerm(term);
        setIsModalOpen(true); // Show modal on fetching the meaning
      })
      .catch((error) => {
        console.error('Error fetching meaning:', error);
        setMeaning('Error fetching meaning');
        setIsModalOpen(true);
      });
  };

  return (
    <div className="p-2 ">
      <div className="text-xl p-3 bg-purple-500 text-white flex justify-center mb-4">{alphabet}</div>
      <div className="flex flex-wrap justify-start">
        {musicTerms.map((term, index) => (
          <button
            key={index}
            onClick={() => fetchMeaning(term)}
            className="text-lg m-2 p-2 bg-gray-700 text-white hover:bg-purple-700 rounded transition duration-300 ease-in-out"
          >
            {term}
          </button>
        ))}
      </div>

      {/* Modal for showing the word meaning */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-purple-700">{selectedTerm}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-xl font-bold text-red-500 hover:text-red-700 transition duration-200"
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">Meaning</h3>
              <p className="text-gray-700 mt-2">{meaning}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Glossary_Box;
