import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Bounce from 'react-reveal/Bounce';
import { motion, AnimatePresence } from "framer-motion";

import {
  Link
} from "react-router-dom";

function MySection(props){
  const [show, setShow] = useState(false);
  const origin = props.pageactive;
  const destination =  props.pageloaded;
  // console.log("origin " + origin + " destination " + destination);

  useEffect(() => {
    origin === destination ? setShow(true) : setShow(false);
  });
  
  return (
    
    <div className="section">
      <div className="mainText">
        <h2>{props.subtitle}</h2>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <Link to="/project">
        <button className="cta">{props.cta}</button>
        </Link>
        <h4>{props.message}</h4>
      </div>
      <Bounce right when={show}>
      <img className={props.class} src={props.screen}></img>
      </Bounce>
    </div>
   
  );
};

export default MySection

