import React, { useState } from 'react';
import './Courses.css'; 

function Courses() {
    const [showList, setShowList] = useState({
        basics: false,
        intermediate: false,
        expert: false
    });
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVideoFullScreen, setIsVideoFullScreen] = useState(false);

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

    const toggleFullScreen = () => {
        const iframe = document.querySelector('.video-iframe');
        if (iframe) {
            if (!isVideoFullScreen) {
                if (iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                } else if (iframe.mozRequestFullScreen) { // Firefox
                    iframe.mozRequestFullScreen();
                } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    iframe.webkitRequestFullscreen();
                } else if (iframe.msRequestFullscreen) { // IE/Edge
                    iframe.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { // Firefox
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { // IE/Edge
                    document.msExitFullscreen();
                }
            }
            setIsVideoFullScreen(prevState => !prevState);
        }
    };

    return (
        <div className='mt-40 pr-40 pl-10'>
            <div className='py-10 flex flex-col justify-between items-start'>
                <ul>
                    <li>
                        <button onClick={() => toggleList('basics')} className='bg-slate-400 hover:bg-red-500 h-10 w-screen px-8'>LEARN THE BASICS</button>
                        {showList.basics && (
                            <ul>
                                <li onClick={() => openModal(
                                    <iframe
                                        className="video-iframe"
                                        width='560'
                                        height='315'
                                        src='https://www.youtube.com/embed/i8YLBufmWV4?si=N1AVcHJsRiT_bMbl'
                                        title='YouTube video player'
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    >
                                    </iframe>
                                )}>Topic1</li>
                                <li onClick={() => openModal('Topic 2')}>Topic 2</li>
                                <li onClick={() => openModal('Topic 3')}>Topic 3</li>
                            </ul>
                        )}
                    </li>
                    {/* Other list items */}
                </ul>
            </div>
            {isModalOpen && (
                <>
                    <div className='overlay' onClick={closeModal}></div>
                    <div className='modal'>
                        <div className='modal-content'>
                            <span className='close' onClick={closeModal}>&times;</span>
                            <h2>{selectedTopic}</h2>
                            <button onClick={toggleFullScreen} className='h-10 w-40 bg-orange-400'>Toggle Full Screen</button>
                            {/* Add additional content for the modal */}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Courses;
