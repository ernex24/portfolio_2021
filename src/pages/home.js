import React, { useEffect, useState } from 'react';

import Header from "../components/header";
import MySection from "../components/section";

import ReactFullpage from '@fullpage/react-fullpage';

import comercialbank from '../assets/images/comercialwebpage.svg';
import bank from '../assets/images/investmentbank.svg';
import evscreen from '../assets/images/ev-screen.svg';
import designSystem from '../assets/images/design-system.svg';
import laptop from '../assets/images/Macbook.png';
import arrowDown from '../assets/images/arrow_down.svg';
import arrowUp from '../assets/images/arrow_up.svg';
import niceBackground from '../assets/images/niceBackground.svg';

import { motion, AnimatePresence } from "framer-motion";


const moveDown = () => {
  // console.log(window.fullpage_api)
  window.fullpage_api.moveSectionDown();
}

const moveUp = () => {
  window.fullpage_api.moveSectionUp();
}


const Home = () => { 

  const [origin, setOrigin] = useState(0);
  const [destination, setDestination] = useState(0);
  const onLeave = (origin, destination, direction) => setOrigin(destination.index);
  const afterLoad = (origin, destination, direction) => setDestination(destination.index);
  const anchors = ["home", "designSystem", "webApp", "mobileApp", "contact"];


  return(
    <>
    <Header pageactive={origin} />
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      onLeave={onLeave.bind(this)}
      afterLoad={afterLoad.bind(this)}
      render={({ state, fullpageApi }) => {
        return (
            <div>
            <MySection 
              title={"Hi I'm Ernesto"}
              subtitle={"Senior UI UX Engineer"} 
              description={"A system-minded Senior Product Designer with visual design, development, and business background."}
              cta={"Download my cv"} 
              link={"https://ernesto-perez.com/cv_ernesto_perez.pdf"} 
              screen={evscreen} 
              class={"phone"} 
              pageactive={origin} 
              pageloaded={destination}/>
            <MySection 
              title={"Design system"}
              subtitle={"Project"} 
              description={"I spread design all over the company creating a design system."} 
              cta={"See the project"} 
              message={"Comming soon"} 
              link={"#"} 
              screen={designSystem} 
              class={"laptop"} 
              pageactive={origin} 
              pageloaded={destination}/>
            <MySection 
              title={"Comercial web"} 
              subtitle={"Project"} 
              description={"A corporative we for an investment bank"} 
              cta={"See the project"} 
              message={"Comming soon"} 
              link={"#"} 
              screen={comercialbank} 
              class={"comercial_web"} 
              pageactive={origin} 
              pageloaded={destination}/>
            <MySection 
              title={"Investment bank app"}
              subtitle={"Project"} 
              description={"An app to operate in the stock market"} 
              cta={"See the project"} 
              message={"Comming soon"} 
              link={"#"} 
              screen={bank} 
              class={"laptop"} 
              pageactive={origin} 
              pageloaded={destination}/>
            </div>
        );
      }}
    />
  
    <div className="pageNumberContainer">
  <AnimatePresence>
    <motion.div
           exit={{ opacity: 0, x: 50 }}
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}      
        >
      <div className="pageNumber">{'0'+(origin+1)}</div>
      </motion.div>
      </AnimatePresence>
      </div>
 
      <div className="niceBackgroundContainer">

      <AnimatePresence>
          <motion.div
           exit={{ opacity: 0, x: 800 }}
           initial={{ opacity: 0, x: 800 }}
           animate={{ opacity: 1, x: 20 }}      
        >
          <img className="niceBackground" src={niceBackground}></img>
          </motion.div>
      </AnimatePresence>

      </div>

      <div className="arrowContainer">
      <AnimatePresence>
          <motion.div
           exit={{ opacity: 0, x: -50 }}
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}      
        >
      <img onClick={() => moveDown()} className={ origin === 3 ? " hide" : " arrowDown"} src={arrowDown}></img>
      <img onClick={() => moveUp()} className={ origin === 0 ? " hide" : " arrowUp"  } src={arrowUp}></img>
      </motion.div>
      </AnimatePresence>
      </div>
  </>
    )
  }

export default Home
