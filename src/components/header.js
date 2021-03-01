import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import logo from '../assets/images/ernesto_perez_logo.svg';
import linkedin from '../assets/images/linkedin.svg';
import dribbble from '../assets/images/dribbble.svg';
import instagram from '../assets/images/instagram.svg';

const moveTo = (section) => {
  window.fullpage_api.moveTo(section);
  // console.log(window.fullpage_api)
}

const Header = (props) => (
 
  <header className="header">
     <AnimatePresence>
     <motion.div
      exit={{ opacity: 0, y: -50 }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}   
     >
    <div className="mainHeader">
    <div><a href="#home" onClick={() => moveTo(1)} ><img className="logo" src={logo} alt="Ernesto Pérez UI UX Designer"></img></a></div>
    <ul className="nav">

      <li><a href="#home" 
             className={ props.pageactive === 0 ? "navactive" : " "  } 
             onClick={() => moveTo(1)} >Home</a></li>

      <li><a href="#designSystem" 
             className={ props.pageactive === 1 ? "navactive" : " "  }  
             onClick={() => moveTo(2)} >Design system</a></li>

      <li><a href="#webApp" 
             className={ props.pageactive === 2 ? "navactive" : " "  } 
             onClick={() => moveTo(3)} >Web app</a></li>

      <li><a href="#mobileApp" 
             className={ props.pageactive === 3 ? "navactive" : " "  } 
             onClick={() => moveTo(4)} >Mobile app</a></li>

      <li><a href="mailto:ernex24@gmail.com" 
             className={ props.pageactive === 4 ? "navactive" : " "  } 
             >Contact</a></li>

    </ul>
    </div>
    </motion.div>
  </AnimatePresence>
  <AnimatePresence>
  <motion.div
  exit={{ opacity: 0, y: -50 }}
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}   
>
    <ul className="socialnav">
      <li><a href="https://www.linkedin.com/ernesto1984" target="_blank" rel="noreferrer" ><img src={linkedin} alt="Ernesto Pérez UI UX Designer"></img></a></li>
      <li><a href="https://dribbble.com/ernex1984" target="_blank" rel="noreferrer" ><img src={dribbble} alt="Ernesto Pérez UI UX Designer"></img></a></li>
      <li><a href="https://www.instagram.com/ernex_ux_ui" target="_blank" rel="noreferrer" ><img src={instagram} alt="Ernesto Pérez UI UX Designer"></img></a></li>
    </ul>
    </motion.div>
  </AnimatePresence>
  </header>
  
)

export default Header
