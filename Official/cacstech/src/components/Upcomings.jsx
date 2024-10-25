import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const Upcomings = (props) => {
  const controls = useAnimation();
  const [elementInView, setElementInView] = useState(false);
  const ref = useRef(null);

    const evestyle = {
    margin: "6px",
    height: "6.8rem",
    padding: "4px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#403b4d",
    borderRadius: "8px",
    overflow : "scroll",
    overflowX : "hidden",
    overflowY : "hidden"
  };

  const upstyles = { border: "10px", borderColor: "red" };

  // Intersection Observer to detect scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setElementInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  // Framer Motion variants for left and right animations
  const leftSlide = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <div className="uplists" style={upstyles} ref={ref}>
        <ol style={{ listStyle: "none" }}>
          
          <li>
  <motion.div
    className="events shadow-lg rounded-lg flex items-center justify-between p-4"
    style={evestyle}
    initial="hidden"
    animate={controls}
    variants={leftSlide} // Slide in from left
    whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(255,255,255,0.7)" }} // Hover effect
  >
    <img
      src= {props.imgsrc1}
      alt=""
      style={{
        width: "12%",
        height: "130%",
        borderRadius: "8px",
        objectFit: "fit",
        border: "2px solid white",
      }}
    />
    <p
      style={{
        width: "85%",
        margin: "0 16px",
        color: "white",
        fontSize: "1.5rem",
        textAlign: "left",
        letterSpacing: "0.05rem",
        lineHeight: "1.6",
      }}
    >
    {props.desc1}
    </p>
  </motion.div>
</li>

<li>
  <motion.div
    className="events shadow-lg rounded-lg flex items-center justify-between p-4"
    style={evestyle}
    initial="hidden"
    animate={controls}
    variants={rightSlide} // Slide in from right
    whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(255,255,255,0.7)" }} // Hover effect
  >
    <img
      src={props.imgsrc2}
      alt=""
      style={{
        width: "12%",
        height: "130%",
        borderRadius: "8px",
        objectFit: "fit",
        border: "2px solid white",
      }}
    />
    <p
      style={{
        width: "85%",
        margin: "0 16px",
        color: "white",
        fontSize: "1.5rem",
        textAlign: "left",
        letterSpacing: "0.05rem",
        lineHeight: "1.6",
      }}
    >
      {props.desc2}
    </p>
  </motion.div>
</li>

<li>
  <motion.div
    className="events shadow-lg rounded-lg flex items-center justify-between p-4"
    style={evestyle}
    initial="hidden"
    animate={controls}
    variants={leftSlide} // Slide in from left again
    whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(255,255,255,0.7)" }} // Hover effect
   >
    <img
      src={props.imgsrc3}
      alt=""
      style={{
        width: "12%",
        height: "130%",
        borderRadius: "8px",
        objectFit: "fill",
        border: "2px solid white",
      }}
    />
    <p
      style={{
        width: "85%",
        margin: "0 16px",
        color: "white",
        fontSize: "1.5rem",
        textAlign: "left",
        letterSpacing: "0.05rem",
        lineHeight: "1.6",
      }}
    >
      {props.desc3}
    </p>
  </motion.div>
</li>

          
        </ol>
      </div>
    </>
  );
};
