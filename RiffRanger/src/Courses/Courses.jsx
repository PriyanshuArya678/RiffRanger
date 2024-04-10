import React, { useState } from 'react';
import './Courses.css'; 

function Courses() {
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
    <div className='bg-black'>
      <div className='m-40 flex flex-col'>
      {majorTopics.map((val, index) => (
        <div key={index} className='flex flex-col'>
          <button onClick={() => expandTopic(val.majorTopics)} className='text-white mt-3 bg-gradient-to-r from-primary to-secondary py-2'>
            {val.majorTopics}
          </button>
          {expanded === val.majorTopics && (
            <div>
              <div className='flex flex-col'>
                {val.subTopics.map((subTopic, subIndex) => (
                  <button onClick={openModal} className='text-white bg-[#605470] py-2' key={subIndex}>{subTopic}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-X84GG06g-c" frameborder="2" allowfullscreen></iframe>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Courses;
