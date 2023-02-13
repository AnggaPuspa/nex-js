import React from "react";
import Image from 'next/image'
import foto from "../public/1jpg.jpg";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
     id='Home'
     className='min-h-screen flex py-10 md:flex-row flex-col items-center bg-hero '
    >
      <div className='flex-1 flex items-center justify-center h-full'>
        <Image src={foto} alt="" className='  w-8/12  rounded-t-3xl ' />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white  font-mono font-bold'>
            <span className=' md:text-6xl text-5xl'>Halo  Saya </span >
          </h1>
          <h4 className='md:text-7xl text-lg md:leading-normal leading-5 font-bold text-white  font-mono '   >
            <Typewriter
             options   ={{
                strings: [ 'I made Angga Puspa Yoga','student', 'junior programmer'],
                autoStart: true,
                loop: true,
                     }}
              />
            </h4>
            <h4 className='md:text-1xl   pt-10 text-lg md:leading-normal leading-5 font-bold text-tex'><span className='bg-span p-1'  >"Providing innovative and beneficial technology solutions for society"</span> </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;