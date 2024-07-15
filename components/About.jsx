import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          My name is Himanshu. I am currently studying at J.C. Bose UST, YMCA, Faridabad.
          </p>
          <p className='py-2 text-gray-600'>
            I am a Machine Learning Developer and Front-End Developer with a passion for solving complex problems and building innovative solutions.
          </p>
          <p className='py-2 text-gray-600'>
            Since 2023, I have been actively involved in software development, working on various projects that utilize cutting-edge technologies.
          </p>
          <p className='py-2 text-gray-600'>
            Apart from my expertise in Machine Learning and Front-End development, I am also proficient in Data Structures and Algorithms, with a LeetCode rating of 1780+. I am committed to continuous learning and honing my skills in these areas.
          </p>
          <p className='py-2 text-gray-600'>
            Additionally, I am a proud member of the IEEE Student Branch, where I actively participate in community events and contribute to fostering a culture of innovation and collaboration.
          </p>
          <p className='py-2 text-gray-600'>
            In my leisure time, I enjoy playing volleyball, which helps me stay active and refreshed.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
