// /components/AnimatedHeading.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const englishLetters = [' ', ' ', 'C', 'A', 'C', 'S', ' ', ' '];
const hindiLetters = ['I', 'I', 'I', 'T', 'K', 'O', 'T', 'A']; // Example Hindi equivalent

const letterVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
  morph: { opacity: 0, scale: 0.8, rotate: 180 }, // Molding effect
};

const AnimatedHeading = () => {
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHindi((prev) => !prev);
    }, 4000); // Change between English and Hindi every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        margin: '40px 0',
        fontFamily: 'Iceland',
        color: 'white',
        fontSize: '4rem', // Default font size for large screens
      }}
    >
      {englishLetters.map((letter, index) => (
        <div
          key={index}
          style={{
            position: 'relative',
            margin: '0 20px', // Default margin for large screens
            display: 'inline-block',
          }}
        >
          {/* English Letters */}
          <motion.span
            initial="visible"
            animate={isHindi ? 'morph' : 'visible'}
            exit="hidden"
            variants={letterVariants}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              fontFamily: 'Iceland',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            {letter}
          </motion.span>

          {/* Hindi Letters */}
          <motion.span
            initial="hidden"
            animate={isHindi ? 'visible' : 'morph'}
            exit="hidden"
            variants={letterVariants}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            {hindiLetters[index]}
          </motion.span>
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 1024px) {
          div {
            font-size: 3rem;
          }
          div > div {
            margin: 0 15px;
          }
        }
        @media (max-width: 768px) {
          div {
            font-size: 2.5rem;
          }
          div > div {
            margin: 0 10px;
          }
        }
        @media (max-width: 480px) {
          div {
            font-size: 2rem;
          }
          div > div {
            margin: 0 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeading;
