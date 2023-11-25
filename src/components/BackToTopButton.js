import React, { useState, useEffect } from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import "../styles/BackToTopButton.css";

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    return (
      <Element name="top" className={`back-to-top ${visible ? "visible" : ""}`}>
        <button className="back-to-top-button" onClick={scrollToTop}>
          <span>&#9757;</span>
        </button>
      </Element>
    );
  };
  
  export default BackToTopButton;