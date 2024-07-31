import { AnimatePresence, motion } from 'framer-motion';
import './Style/ProjectVisitOption.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectVisitOption = ({link , git}) => {

    const [copyStatus, setCopyStatus] = useState('');
  
    const copyToClipboard = ( ) => {
    
      navigator.clipboard.writeText(link)
        .then(() => {
          setCopyStatus('Link copied to clipboard!');
          setTimeout(() => {
            setCopyStatus('');
          }, 1000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    };
  




  return (
    <div className="social-links dark:text-white">
      <Link to={link} target='_blank'>
		<div id="link" className="social-btn flex-center dark:hover:bg-dark-secondary dark:text-white">
    <svg width="24" height="24" viewBox="-7.68 -7.68 39.36 39.36" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="2.4"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-7.68" y="-7.68" width="39.36" height="39.36" rx="19.68" fill="#000000" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1L24 22H0L12 1Z" fill="#000000"></path> </g></svg> <span>Live</span>
		</div>
	</Link>
		<div id="copy" onClick={copyToClipboard} className="social-btn flex-center dark:hover:bg-dark-secondary dark:text-white">
      
	   <AnimatePresence>
        {copyStatus ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-semibold"
          >
            copied!
          </motion.div>
        ) : <div className='flex'>
        <svg
     
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    
      width="20"
      height="20"
      x="0"
      y="0"
      viewBox="0 0 6.35 6.35"
     
      
    >
      <g>
        <path
          d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
          fill="currentColor"
        ></path>
      </g>
    </svg><span>Copy</span>
   
          </div>}
      </AnimatePresence>
  </div>
      <Link to={git} target="_blank" >
		<div id="github" className="social-btn flex-center dark:hover:bg-dark-secondary dark:text-white">
			<svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><span>Repo</span>
	</div>
      </Link>
</div>
  );
};

export default ProjectVisitOption;
