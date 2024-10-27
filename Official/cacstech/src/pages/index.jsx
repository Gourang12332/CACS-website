import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
    },
  }),
};

const rotatingShapeAnimation = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Landing = () => {
  const letters = ["C", "A", "C", "S"];
  const [isVisible, setIsVisible] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
      setCycleCount((prev) => prev + 1);
    }, 1600);

    if (cycleCount >= 3) {
      clearInterval(interval);
      router.push('/Home');
    }

    return () => clearInterval(interval);
  }, [cycleCount, router]);

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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "80vh",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            fontSize: "10vw",
            fontWeight: "bold",
            color: "gray",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {letters.map((letter, i) => (
            <motion.div
              custom={i}
              key={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={letterAnimation}
              style={{ position: "relative", margin: "0 10px", color: "#af125a", fontFamily: "Iceland" }}
            >
              {letter}

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
                  top: "-10%",
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "white",
                  transformOrigin: "left center",
                }}
              />
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
                  bottom: "-10%",
                  left: 0,
                  right: 0,
                  height: "2px",
                  backgroundColor: "white",
                  transformOrigin: "right center",
                }}
              />
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
                  left: "-10%",
                  width: "2px",
                  backgroundColor: "white",
                  transformOrigin: "top center",
                }}
              />
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
                  right: "-10%",
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
