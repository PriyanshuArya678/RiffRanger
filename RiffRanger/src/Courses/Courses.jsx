// CoursesWithModal.jsx

import React, { useState } from 'react';
import './Courses.css'; // Import CSS file for styling

const CoursesWithModal = () => {
  const [showList, setShowList] = useState({
    basics: false,
    intermediate: false,
    expert: false
  });
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleList = (level) => {
    setShowList(prevState => ({
      ...prevState,
      [level]: !prevState[level]
    }));
  };

  const openModal = (topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='mt-40 ml-20'>
      <div className='py-10 flex flex-col justify-between items-start gap-10'>
        <ul>
          <li>
            <button onClick={() => toggleList('basics')} className='  bg-slate-400 hover:bg-red-500 h-10 w-'>LEARN THE BASICS</button>
            {showList.basics && (
              <ul>
                <li onClick={() => openModal(<iframe width="560" height="315" src="https://www.youtube.com/embed/i8YLBufmWV4?si=N1AVcHJsRiT_bMbl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>)}>Topic1</li>
                <li onClick={() => openModal('Topic 2')}>Topic 2</li>
                <li onClick={() => openModal('Topic 3')}>Topic 3</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleList('intermediate')} className='bg-slate-400 hover:bg-red-500 h-10 w-40'>INTERMEDIATE</button>
            {showList.intermediate && (
              <ul>
                <li onClick={() => openModal('Topic A')}>Topic A</li>
                <li onClick={() => openModal('Topic B')}>Topic B</li>
                <li onClick={() => openModal('Topic C')}>Topic C</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleList('expert')} className='bg-slate-400 hover:bg-red-500 h-10 w-40'>EXPERT</button>
            {showList.expert && (
              <ul>
                <li onClick={() => openModal('Topic X')}>Topic X</li>
                <li onClick={() => openModal('Topic Y')}>Topic Y</li>
                <li onClick={() => openModal('Topic Z')}>Topic Z</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{selectedTopic}</h2>
              {/* Add additional content for the modal */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoursesWithModal;
