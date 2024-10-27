import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const Upcomings = (props) => {
  const controls = useAnimation();
  const [elementInView, setElementInView] = useState(false);
  const ref = useRef(null);

  const evestyle = {
    margin: "6px",
    padding: "4px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#403b4d",
    borderRadius: "8px",
  };

  const upstyles = { border: "10px", borderColor: "red" };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setElementInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
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

  const fadeInScaleRotate = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.3,
      },
    }),
  };

  return (
    <div className="uplists" style={upstyles} ref={ref}>
      <ol style={{ listStyle: "none" }}>
        {[props.imgsrc1, props.imgsrc2, props.imgsrc3].map((imgSrc, index) => (
          <li key={index}>
            <motion.div
              className="events shadow-lg rounded-lg flex flex-col sm:flex-row items-center justify-between p-3"
              style={{ ...evestyle }}
              initial="hidden"
              animate={controls}
              variants={fadeInScaleRotate}
              custom={index}
            >
              <img
                src={imgSrc}
                alt=""
                style={{
                  width: "9rem",
                  height: "8rem",
                  borderRadius: "8px",
                  objectFit: "cover",
                  border: "2px solid white",
                  marginBottom: "8px",
                }}
                className="sm:mb-0"
              />
              <p
                style={{
                  width: "100%",
                  maxWidth: "85%",
                  color: "white",
                  fontSize: "1.4rem",
                  textAlign: "left",
                  letterSpacing: "0.05rem",
                  lineHeight: "1.5",
                  overflowY: "auto",
                }}
                className="mt-2 sm:mt-0"
              >
                {index === 0 ? props.desc1 : index === 1 ? props.desc2 : props.desc3}
              </p>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
};
