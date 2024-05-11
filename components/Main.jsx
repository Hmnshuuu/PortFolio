import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { gsap } from 'gsap';

const Main = () => {
  const [expertise, setExpertise] = useState("Front-End Development");

  useEffect(() => {
    const swapText = () => {
      gsap.to(".expertise", {
        duration: 0.5,
        opacity: 0,
        y: -20,
        ease: "power3.out",
        onComplete: () => {
          setExpertise(prevExpertise => {
            switch (prevExpertise) {
              case "Front-End Development":
                return "Machine Learning ";
              case "Machine Learning ":
                return "Data Structure & Algorithms";
              default:
                return "Front-End Development";
            }
          });
          gsap.to(".expertise", {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power3.out"
          });
        }
      });
    };

    const interval = setInterval(swapText, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Himanshu</span>
          </h1>
          <div className=' items-center m-auto'>
            <p className='text-gray-700'>My expertise are </p>
            <h1 className='py-2 text-gray-700 expertise '>
              {expertise === "Front-End Development" ? (
                <span className="small-text">Front-End Development </span>
              ) : expertise === "Machine Learning " ? (
                <span className="small-text">Machine Learning </span>
              ) : (
                <span className="small-text">Data Structure & Algorithms </span>
              )}
            </h1>
          </div>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto' >
            I specialize in machine learning and front-end development, with a passion for data structures and algorithms.
          </p>
          <div className='flex items-center justify-between max-w-[360px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/himanshuuu/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Hmnshuuu'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://leetcode.com/u/himanshuu_shrma/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <SiLeetcode />
              </div>
            </a>
            <a
              href='/resume'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
