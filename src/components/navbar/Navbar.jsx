import './navbar.scss'
import {motion} from "framer-motion"
import { useState } from 'react';
const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <div className='navbar'>
        <div className='wrapper'>
            <motion.span 
              initial={{ opacity:0, scale:0.5 }}
              animate={{ opacity:1, scale:1}}
              transition={{ duration:1}}
            >
              HAED Dev
            </motion.span>

            <div className='platform topBotomBordersOut'>
                <a href='#services'>What I Do?</a>
                <a href='#projects' >Projects</a>
            </div>
            <div className='platforms'>
                <a href='https://www.linkedin.com/in/houssaine-hafed-a56b98262/'  target="_blank" rel="noopener noreferrer" ><img src="/in.png" alt=""/></a>
                <a href='https://github.com/Hafed112?tab=repositories'  target="_blank" rel="noopener noreferrer" ><img className='img' src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" alt=""/></a>
                
            </div>
        </div>
    </div>
  
  )
}



export default Navbar
