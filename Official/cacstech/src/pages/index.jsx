import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";


const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Faster appearance of letters
      duration: 0.4,  // Shortened duration for quicker animation
    },
  }),
};

const rotatingShapeAnimation = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 10, // Faster rotation speed for the background
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Landing = () => {
  const letters = ["C", "A", "C", "S"];
  const [isVisible, setIsVisible] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);
   

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
     
      setCycleCount((prev) => prev + 1);

      if (cycleCount >= 3) {
        clearInterval(interval);
       <Link href="/Home"></Link>
      }
    }, 1600); // Faster cycle time
    return () => clearInterval(interval);
  }, [cycleCount]);

  return (
    <motion.main
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Rotating Background Effect */}
      <motion.div
        animate="rotate"
        variants={rotatingShapeAnimation}
        style={{
          position: "absolute",
          width: "150%",
          height: "150%",
          background: "radial-gradient(circle, transparent, rgba(255, 255, 255, 0.1))",
          clipPath: "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)", 
          opacity: 0.2,
          filter: "blur(80px)",
        }}
      />

      {/* Letters Animation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "800px",
          width: "1000px",
        }}
      >
        <div
          style={{
            position: "relative",
            fontSize: "10rem",
            fontWeight: "bold",
            color: "gray",
            display: "flex",
          }}
        >
          {letters.map((letter, i) => (
            <motion.div
              custom={i}
              key={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={letterAnimation}
              style={{ position: "relative", margin: "0 20px", color: "#af125a",fontFamily : "Iceland" }}
            >
              
              {letter}

              {/* Top white line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.3,
                }}
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "white",
                  transformOrigin: "left center",
                }}
              />
              {/* Bottom white line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "white",
                  transformOrigin: "right center",
                }}
              />
              {/* Left vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "-10px",
                  width: "2px",
                  backgroundColor: "white",
                  transformOrigin: "top center",
                }}
              />
              {/* Right vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: "-10px",
                  width: "2px",
                  backgroundColor: "red",
                  transformOrigin: "bottom center",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Landing;
