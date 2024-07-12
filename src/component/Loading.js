import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [text, setText] = useState('Welcome To My Portfolio');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === 'Welcome To My Portfolio' ? 'Welcome To My Portfolio' : 'Wel-Come From Sagar Bharvadiya'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading">
      <p className='tw-font-bold tw-text-center tw-text-lg'>{text}</p>
      <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round" />
        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round" />
        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round" />
        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Loading;