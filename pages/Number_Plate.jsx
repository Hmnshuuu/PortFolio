import Image from 'next/image';
import React from 'react';
import number_plate from '../public/assets/projects/number_plate.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const NumberPlateDetection = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={number_plate}
          alt='Number Plate Detection'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Number Plate Detection</h2>
          <h3>Python / YOLOv4</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Number Plate Detection project utilizes Python and the YOLOv4 (You Only Look Once) object detection framework to automatically detect and recognize vehicle number plates in images. YOLOv4 is known for its real-time object detection capabilities, making it suitable for this application.

            Users can upload images containing vehicles, and the application will identify and highlight the number plates. It employs deep learning techniques to achieve accurate detection and recognition of number plates under various conditions.
          </p>
          <a
            href='https://github.com/Hmnshuuu/Automatic-Number-Plate-Detection'
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
                <RiRadioButtonFill className='pr-1' /> YOLOv4
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenCV
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

export default NumberPlateDetection;
