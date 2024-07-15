import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaFileDownload } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Himanshu | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Himanshu </h2>
          <div className='flex items-center'>
            <a
              href='https://www.linkedin.com/in/himanshuuu/'
              target='_blank'
              rel='noreferrer'
              className='mr-4'
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href='https://github.com/Hmnshuuu'
              target='_blank'
              rel='noreferrer'
              className='mr-4'
            >
              <FaGithub size={20} />
            </a>
            <a href="/assets/resume.pdf" download>
              <button className="px-5 py-2 rounded-lg bg-[#810CA8] text-white flex gap-2 items-center hover:bg-[--color-purple-light]">
                Resume <FaFileDownload />
              </button>
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Machine Learning <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          As a dedicated student, I am passionate about exploring the realms of machine learning and deep learning problem-solving. Alongside my academic pursuits, I actively engage in platforms like Leetcode, where I tackle challenging problems to enhance my skills in these domains. Beyond academics, I am a fervent sports enthusiast, finding joy and balance in physical activity. My commitment to both intellectual and physical pursuits reflects my multifaceted approach to personal growth and development.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> C++
            <span className='px-2'>|</span> Data Structure & Algorithm
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span> Machine Leaning
            <span className='px-2'>|</span> Deep Learning
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> Tailwind
            <span className='px-2'>|</span> JavaScript
            <span className='px-2'>|</span> React
            <span className='px-2'>|</span> SQL
            <span className='px-2'>|</span> GitHub
          </p>
          <p className='py-2'>
            <span className='font-bold'>Other Skills</span>
            <span className='px-2'>|</span> Designing
            <span className='px-2'>|</span> Editing
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Projects
        </h5>

        <div className='py-6'>
          <p className='py-1 font-bold italic'>
            Sign-O-Text:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Converts Sign-language into Text using MediaPipe, LSTM, and neural network.
            </li>
          </ul>

          <p className='py-1 font-bold italic'>
            IPL_Win_Predictor:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Uses machine learning (Logistic Regression) and Streamlit to predict the probability of winning in IPL matches.
            </li>
          </ul>

          <p className='py-1 font-bold italic'>
            Emotion Detection:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Detects emotions from facial expressions using Python and deep learning techniques (CNN).
            </li>
          </ul>

          <p className='py-1 font-bold italic'>
            Duplicate Question Pair Detection:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Identifies duplicate question pairs using NLP techniques with Python.
            </li>
          </ul>

          <p className='py-1 font-bold italic'>
            Automatic Number Plate Detection:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Detects number plates in images using YOLOv5 and Python.
            </li>
          </ul>

          <p className='py-1 font-bold italic'>
            Twitter Sentiment Analysis:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Performs sentiment analysis of positive and negative comments on Twitter using NLP techniques.
            </li>
          </ul>

          <p className='py-1 font-bold italic'>
            Comment Toxicity Analyzer:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              A machine learning project built using TensorFlow and text vectorization techniques to analyze text comments and determine their toxicity levels.
            </li>
          </ul>

          <p className='py-1 font-bold italic'>
            Chat Analyzer:
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Analyzes text comments using regular expressions (regex), URL extractor, and additional regex functionality.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
