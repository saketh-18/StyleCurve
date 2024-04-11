import React, { useEffect, useState } from 'react';

export default function Signature() {
  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggeringPoint = window.innerHeight * 2.8;
      console.log(addClass)
      
      if(scrollPosition >= triggeringPoint) {
        setAddClass(true);
      } else {
        setAddClass(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex justify-between items-center bg-black w-full h-screen mt-14'>
        <div className='flex items-start flex-col w-1/3 ml-10'>
            <p className={`font-semibold text-3xl mb-5 text-white ${addClass ? 'fade-text-left' : ''}`}>Handpicked Designs Only for You</p>
            <p className={`text-white ${addClass ? 'fade-text-left' : ''}`}>We came into existence with an idea bringing Urban Art into mainstream and empowering consumers to customise anything. We are a germination of Ink-dipped brains with expertise in print, design and merchandising.   </p>
        </div>
        <div className={`w-1/2 h-full signature-bg z-10 ${addClass ? 'signature-bg-animation' : ''}`}></div>
    </div>
  );
}
