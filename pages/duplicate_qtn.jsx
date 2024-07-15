import Image from 'next/image';
import React from 'react';
import duplicate_qtn from '../public/assets/projects/duplicate_qtn.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const DuplicateQuestionPairDetection = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={duplicate_qtn}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Duplicate Question Pair Detection</h2>
          <h3>Python / NLP</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Duplicate Question Pair Detection project is a web application developed using Python and natural language processing (NLP) techniques to identify whether a pair of questions are duplicates. The machine learning model is trained on a large dataset of question pairs to classify them as duplicate or not.

            Users can input two questions, and the app will analyze their similarity and predict whether they are duplicates. The app uses advanced NLP techniques such as word embeddings and neural networks to achieve high accuracy in prediction.
          </p>
          <a
            href='https://github.com/Hmnshuuu/Duplicate-Question-Pair'
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
                <RiRadioButtonFill className='pr-1' /> NLP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Neural Networks
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

export default DuplicateQuestionPairDetection;
