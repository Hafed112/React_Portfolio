import './me.scss'
import {motion} from "framer-motion"
const Me = () => {
  
  const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1.2,
        }
    }
  }
  return (
    <div className='me'>
        <div className='wrapper'>
        <motion.div 
            className="containerCntx"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
        >
            <motion.h2>ELHOUSSAINE HAFED</motion.h2>
            <motion.h1>Full stack developer</motion.h1>
            <motion.div className='button'>
                <motion.a href='#Contact'>Contact</motion.a>
            </motion.div>
        </motion.div>
        </div>
      <div className="container-img">
        <img src='/me.png' alt=''/>
      </div>
    </div>
  )
}

export default Me
