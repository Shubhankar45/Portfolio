import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectVariants = {
    hidden: i => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100, // alternate left and right
    }),
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  };

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className="my-20 text-black text-center text-4xl font-serif">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className='mb-8 flex flex-wrap lg:justify-center'
            custom={index}
            initial="hidden"
            animate="visible"
            variants={projectVariants}
          >
            <div className="w-full lg:w-1/4">
              <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-gray-600">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium bg-grey'>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
