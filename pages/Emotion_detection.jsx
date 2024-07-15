import Image from 'next/image';
import React from 'react';
import emotion_detection from '../public/assets/projects/emotion_detection.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const EmotionDetection = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={emotion_detection}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Emotion Detection App</h2>
          <h3>Python / Deep Learning</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Emotion Detection App is a web application developed using Python and deep learning techniques to detect emotions from facial expressions. The machine learning model is trained to recognize various emotions such as happiness, sadness, anger, and surprise from images.

            Users can upload an image, and the app will analyze the facial expressions to predict the emotions present. The app uses a convolutional neural network (CNN) trained on a large dataset of labeled facial images to achieve accurate predictions.
          </p>
          <a
            href='https://github.com/Hmnshuuu/Emotion-Detector'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Deep Learning
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CNN
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

export default EmotionDetection;
