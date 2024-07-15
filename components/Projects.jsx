import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import signotextImg from '../public/assets/projects/sign-o-text.jpg';
import score_predictor from '../public/assets/projects/score_predictor.jpg';
import sentimental_analysis from '../public/assets/projects/sentimental_analysis.jpg';
import comment_toxicity_model from '../public/assets/projects/comment_toxicity_model.jpg';
import chat_analyser from '../public/assets/projects/chat_analyser.jpg';
import emotion_detection from '../public/assets/projects/emotion_detection.png';
import duplicate_qtn from '../public/assets/projects/duplicate_qtn.png';
import number_plate from '../public/assets/projects/number_plate.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Sign-O-Text'
            backgroundImg={signotextImg}
            projectUrl='/Sign-O-Text'
            tech='Deep-Learning'
          />
          <ProjectItem
            title='NumberPlate Detection Using YOLO16'
            backgroundImg={number_plate}
            projectUrl='/Number_Plate'
            tech='Computer Vision'
          />
          <ProjectItem
            title='Ipl-Win-Predictor'
            backgroundImg={score_predictor}
            projectUrl='/Ipl_score_predictions'
            tech='Machine Learning'
          />
          <ProjectItem
            title='Sentimental Analysis'
            backgroundImg={sentimental_analysis}
            projectUrl='/sentimental_analysis'
            tech='NLP'
          />
          <ProjectItem
            title='Comment Toxicity Analyser'
            backgroundImg={comment_toxicity_model}
            projectUrl='/comment_toxicity_analysier'
            tech='NLP'
          />
          <ProjectItem
            title='Chat Analyser'
            backgroundImg={chat_analyser}
            projectUrl='/chat_analyser'
            tech='Re'
          />
          <ProjectItem
            title='Emotion Detection'
            backgroundImg={emotion_detection}
            projectUrl='/Emotion_detection'
            tech='Deep-Learning'
          />
          <ProjectItem
            title='Duplicate Question Pair Detection'
            backgroundImg={duplicate_qtn}
            projectUrl='/duplicate_qtn'
            tech='NLP'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
