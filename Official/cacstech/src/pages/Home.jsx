import React from "react";
import Cacscarous from "../components/Cacscarous";
import { Upcomings } from "../components/Upcomings";
import styles from './Home.module.css'; // Importing the CSS module
import Navbar from "../components/Navbar";
import AnimatedHeading from "../components/AnimateHeading";
import Footer from '../components/Footer'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";



const Home = () => {
  const controls = useAnimation();


  const leftSlide = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  useEffect(() => {
  controls.start("visible"); 
}, [controls]);

const evestyle = {
  margin: "6px",
  height: "20rem",
  padding : "0px",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#403b4d",
  borderRadius: "8px",
  backgroundImage: "url('https://img.freepik.com/premium-vector/realistic-blue-lightning-effect-isolated-black-background-thunderbolt-with-light-effect-thunderstorm-design-your-cover-banner-vector-illustration_185386-1106.jpg')", // Corrected
  backgroundSize: "cover", 
  backgroundPosition: "center", 
  overflow : "scroll",
  overflowX : "hidden",
  overflowY : "hidden"
};


  return (
    <>
    <main className={styles.main}>
      <section style={{ marginTop: "0px", marginBottom: "60px", height: "10px" }}>
        <AnimatedHeading />
      </section>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.herosection}>
        <div className={styles.welcome}>
          <div className={styles.left}>
            <Cacscarous />
          </div>
          <div className={styles.right}>
            <h1 className={styles.head}><span style={{color : "#af125a"}}>Welcome to </span>CACS</h1>
            <p className={styles.matter}>
              The Creative Arts and Cultural Society (CACS) fosters creativity and cultural expression within the community. It provides a platform for students to explore diverse art forms, cultural traditions, and creative endeavors through events, workshops, and performances, encouraging collaboration and personal growth. CACS celebrates the richness of creativity and culture, bringing together passionate individuals to share and showcase their talents.
            </p>
          </div>
        </div>
        <div className={styles.section}>
  <div className={styles.sectionHead}>
    <p>Upcoming Events</p>
  </div>
  <a href="https://www.canva.com/design/DAF94L46ZcE/gz6iRJ1uMyGlIAOXZ2JkIg/edit" style={{ textDecoration: "none" }}>
  <motion.div
    className="events bg-gradient-to-r from-purple-700 via-green-800 to-indigo-900 shadow-xl rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between"
    style={evestyle}
    initial="hidden"
    animate={controls}
    variants={leftSlide}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.7)" }}
  >
    <img
      src="/photos/celestia.png"
      alt="Event"
      className="w-3/4 md:w-1/4 h-40 md:h-full rounded-md object-cover border-0"
    />
    <div
      className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-6 text-orange-300 text-left"
      style={{
        fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.7rem)",
        letterSpacing: "0.1rem",
      }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
        <span>Get Ready for the Thunder</span>
      </h1>
      <h2 className="text-xl md:text-2xl mb-2 md:mb-4">
        <span>Soon Coming</span>
      </h2>
      <h3 className="text-lg md:text-xl ml-0 font-semibold italic text-yellow-400">
        <span>TECHKNNOW CULTURAL FEST 2024</span>
      </h3>
      <p className="mt-4 md:mt-6 text-base md:text-lg text-red-200">
        Unleash your creativity, explore new horizons, and be part of an unforgettable cultural fest filled with exciting performances, workshops, and competitions.
      </p>
    </div>
  </motion.div>
</a>

</div>

<div className={styles.section}>
  <div className={styles.sectionHead}>
    <p>Team</p>
  </div>
  <div className={styles.boxlist}>
    <Upcomings
      title="Team"
      imgsrc1="/photos/pawanpresi.jpg"
      imgsrc2= "/photos/jash2.0.jpg"
      imgsrc3= "/photos/yeshgensec.jpg"
      desc1 = "As President, Pawan Kumar leads CACS with vision and dedication, steering initiatives that inspire growth and collaboration. His leadership fosters an environment of innovation and inclusivity for all members."
      desc2 = "Jash Parmar, as Vice President, supports the club's mission by encouraging active participation and engagement. His efforts ensure that every project aligns with the society’s core values of excellence and community."
      desc3 = "Yash Goyal, our General Secretary, brings structure and organization to CACS, handling responsibilities with precision. His commitment keeps the club's operations smooth and focused on impactful achievements."
    />
  </div>
</div>

<div className={styles.section}>
  <div className={styles.sectionHead}>
    <p>Our Clubs</p>
  </div>
  <div className={styles.boxlist}>
    <Upcomings
      title="Our Clubs"
      imgsrc1="https://iiitkota.ac.in/static/media/incognito.30ca3a30.png"
      imgsrc2= "/photos/neon.jpg"
      imgsrc3= "/photos/odyssey.png"
      desc1 = "Incognito is the heart of IIIT Kota’s artistic expression, bringing together dance, drama, and music enthusiasts. The club celebrates creativity and performance, adding vibrancy to campus life."
      desc2 = "Neon, the photography and visual arts club of IIIT Kota, captures the spirit of campus life through compelling imagery. The club celebrates creativity in visual storytelling, preserving moments that reflect our vibrant community."
      desc3 = "Odyssey champions the art of writing and advocates for moral perspectives, providing a platform for thoughtful expression and introspection. The club fosters a community grounded in reflection and impactful storytelling."
    />
  </div>
</div>

<div className={styles.section}>
  <div className={styles.sectionHead}>
    <p>Collaborators</p>
  </div>
  <div className={styles.boxlist}>
    <Upcomings
      title="Collaborators"
      imgsrc1="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYrMUViWkqrg_GGQ3pYnfE7jU7ICZZRBmvNpIgo82ICPumB_2q"
      imgsrc2="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW6waWhZV9ASlFl93ViFGr3NqyAAi6Y_XIT1h7l50lzSDifhXq"
      imgsrc3="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSs0jToWHaYwznhfx_GpPCDqX8YbLyObeWSxInQgRANbHT6SKzq"
      desc1 = "Our collaboration with Allen ACE empowers us to reach new heights in educational excellence, driven by their legacy of success and dedication to nurturing talent. Together, we are shaping pathways for future leaders."
      desc2 = "With Red Bull as a dynamic partner, we are inspired to push boundaries and innovate with a fresh perspective. Their spirit of adventure and creativity fuels our mission to break new ground."
      desc3 = "We are honored to collaborate with Rajasthan Patrika, a distinguished name in Indian journalism, bringing credibility and insight to our shared vision. Their support energizes our commitment to delivering impactful experiences."
    />
  </div>
</div>

      </section>
      {/* <section className="footer">
        <Footer></Footer>
      </section> */}
    </main>
    </>
  );
};

export default Home;
