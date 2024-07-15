import Image from 'next/image';
import React from 'react';
import sentimental_analysis from '../public/assets/projects/sentimental_analysis.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={sentimental_analysis}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'> Twitter Sentimental Analysis</h2>
          <h3>Machine Learning | NLP</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            My Twitter Sentimental Analysis project utilizes Natural Language Processing (NLP) techniques to analyze the sentiments expressed in tweets. By harnessing the power of machine learning, this project deciphers the emotional tone of tweets, offering valuable insights into public opinion, sentiment trends, and user sentiments on various topics. Leveraging advanced NLP algorithms, the project classifies tweets into positive, negative, or neutral sentiments, providing a comprehensive overview of the sentiment landscape on Twitter. With its focus on machine learning and NLP, this project contributes to understanding online sentiment dynamics and their implications across different domains.
          </p>
          <a
            href='https://github.com/Hmnshuuu/Twitter-Sentimental-Analysis'
            target='_blank'
            rel='noreferrer'
          >
            {/* <button className='px-8 py-2 mt-4 mr-8'>Demo</button> */}
          </a>
          <a
            href='https://github.com/Hmnshuuu/Twitter-Sentimental-Analysis'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Machine Learning
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NLP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github 
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Twitch;
