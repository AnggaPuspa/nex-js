import React from "react";
import Image from 'next/image'
import Angga from "../public/gweh.jpeg";

const About = () => {
  return (
    <section id='about'
     className='py-10  bg-p1 '>
      <div className='text-center mt-8 ' >
        <h3 className='text-4xl font-semibold  text-cyan-800'>
          Abo<span className='bg-span'>ut Me</span>
        </h3>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className=' my-3'>
              <p className=' text-font font-mono font-  text-justify leading-7 w-11/12 mx-auto'>
              Halo teman-teman, perkenalkan nama saya Imade Angga Puspa Yoga. Saya adalah siswa kelas 11 SMK asal Pupuan Tabanan. Hobi saya adalah bermain game, dan saya sangat menikmati waktu luang dengan memainkan berbagai jenis game. Dalam waktu luang saya juga suka mengejar cita-cita untuk menjadi seorang game developer yang handal dan membuat game-game yang sangat menyenangkan. Saya sangat bersemangat untuk belajar dan berkembang bersama teman-teman sekolah. 
              </p>
              <br />
              <br />
              <a href='./public/Angga Puspa.pdf' download>
              <button type='button' className=' px-6 pt-2.5 pb-2 bg-span text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-900 active:shadow-lg transition duration-150 ease-in-out flex align-center'>
      <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='download'
        className='w-3 mr-2' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <path fill='currentColor'
          d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'>
        </path>
      </svg>
       Download Cv
    </button>
              </a>
            </div>
          </div>
          <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center '>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm  '>
              <Image
                src={Angga}
                alt='Angga'  
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;