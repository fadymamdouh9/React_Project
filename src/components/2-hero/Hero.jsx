
import Lottie from 'lottie-react';
import  './hero.css';
import devAnimation from '../../../public/animee/dev.json';
import { useRef } from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  const lottieRef = useRef();


  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className="parent-avatar flex">
          <motion.img
          initial={{transform : "scale(0)"}}
          animate={{transform : "scale(1)"}}
          transition={{duration:2 , type:"spring", stiffness:100}}
          src="./me-modified.png" className='avatar' alt="" />
          <div className='icon-verified'></div>
          </div>

          
            <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}


             className='title'>Fady Mamdouh </motion.h1>
          
            <p className='sub-title'> I am Junior Full Stack : <br />
          
          •	Back end : Laravel - Rest API (postman)  - PHP - PHP MyAdmin <br />
          •	Front end : React.JS  - HTML - CSS - Java script - Bootstrap <br />
          •	Wordpress 
          </p>
          
          <div className="all-icons flex">
            <div className="icon icon-twitter-square"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin"></div>
          



          
        </div>

        
      </div>
      <div className='right-section animation flex'>
        
      <Lottie  
      lottieRef={lottieRef}
      className=''
      onLoadedImages={() =>{
        // @ts-ignore
        lottieRef.current.setspeed(0.9);
      }}
       animationData={devAnimation} />

      </div>
      
    </section>
  );
}

export default Hero;
