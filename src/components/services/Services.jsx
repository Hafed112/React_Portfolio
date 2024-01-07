import'./services.scss'
import { motion,useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
        duration: 1,
        staggerChildren: 0.1,
        },
    },
    };
const Services = () => {

  return (
     <div className="container" >
        <motion.div className='ser' 
        variants={variants} 
        initial="initial" 
        whileInView="animate"
     >
            <motion.h2 className="description">I'm a Full-Stack Developer with a passion for creating seamless web experiences. Here's what I specialize in:</motion.h2>
            <motion.div className="cards">
            
                <motion.div className="card front-end">
                    <motion.div className="icon">
                        <motion.img src="/frontEndIcon.png" alt="Front-End Icon" />
                    </motion.div>
                    <motion.h3>Front-End Development</motion.h3>
                    <motion.p>I create beautiful, responsive user interfaces using HTML, CSS, and React JS. I focus on delivering a seamless user experience and pixel-perfect designs.</motion.p>
                </motion.div>
                <motion.div className="card back-end">
                    <motion.div className="icon">
                        <motion.img src="/backend.png" alt="Back-End Icon" />
                    </motion.div>
                    <motion.h3>Back-End Development</motion.h3>
                    <motion.p>I design and develop server-side applications and APIs using technologies like Node.js, Laravel, and Django. I ensure data security and performance optimization.</motion.p>
                </motion.div>
                
            </motion.div>
            
            <p className="about-me">I'm dedicated to delivering high-quality solutions that empower businesses and users. Let's work together to turn your ideas into reality.</p>
            <div className='.container-button'>
             <a href='#Contact' className="cta-button">Contact Me</a>
            </div>
        </motion.div>
        
    </div>
  )
}

export default Services
