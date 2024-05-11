import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/score_predictor.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>IPL Winner Predictor</h2>
          <h3>Streamlit / Logistic Regression</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The IPL Score Predictor is a web application developed using Streamlit and logistic regression. The main objective of this project is to predict the score of an IPL match based on various factors such as team performance, weather conditions, and player statistics. The prediction model is built using logistic regression and is deployed using Streamlit. Users can input the required parameters and get the predicted score for the match.

            This application supports user authentication, allowing users to create an account and save their match predictions. The user-specific data is stored in Firestore, enabling personalized experiences for each user.
          </p>
          <a
            href='https://github.com/Hmnshuuu/Ipl_Winner_Predictor.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cryptobase-yt.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            {/* <button className='px-8 py-2 mt-4'>Demo</button> */}
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Streamlit
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Logistic Regression
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

export default crypto;
