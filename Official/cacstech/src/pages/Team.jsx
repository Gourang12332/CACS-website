import React from "react";
import styles from './Team.module.css'; // Import your CSS module
// import { Footer } from "../components/Footer";
import { Teamcard } from "../components/Teamcard";
import Navbar from "../components/Navbar";

 const Team = () => {
    return (
        
        <>
        <Navbar></Navbar>
            <main className={styles.main} style={{fontFamily : "Iceland"}}> {/* Apply styles.main */}
                <section className={styles.intrototeam}>Team</section>
                <section className={styles.navbar}></section>
                <section className={styles.teamheroes}>
                    <div className={styles.teamintro}>
                        <p  className={styles.head} style={{ fontWeight: "bolder", fontSize: "50px",color:"white" }}>
                            <span style={{color : "#af125a"}}>About</span> our Team
                        </p>
                        <p style={{color : "wheat" , fontSize : "1.8rem"}} className={styles.matter}>
                            "Our team at CACS is committed to fostering innovation through cutting-edge technology solutions. With a focus on excellence, we work collaboratively to tackle complex challenges, bringing together creativity and expertise to drive impactful results. Together, we aim to set new standards in the tech landscape and empower communities with transformative solutions."
                        </p>
                    </div>
                    <div className={styles.teamcards}> {/* Apply styles.teamcards */}
                        <Teamcard
                            key="1"
                            imgsrc = "/photos/pawanpresi.jpg"
                            para="Pawan Kumar President "
                            description = "Leads the society, setting strategic goals and coordinating with all secretaries. The President ensures each event aligns with the society’s mission and fosters a positive, collaborative environment."
                        />
                        <Teamcard
                            key="2"
                            imgsrc="/photos/jashvicepresi.jpg"
                            para="Jash Parmar Vice President"
                            description = "Supports the President in decision-making, helps with coordination between secretaries, and steps in to lead if the President is unavailable. They work to ensure all teams collaborate effectively."
                        />
                        <Teamcard
                            key="3"
                            imgsrc="/photos/yeshgensec.jpg"
                            para="Yash Goyal General Secretary"
                            description = "Acts as the society’s organizational backbone, taking meeting notes, managing records, and scheduling. They keep everyone informed and organized for upcoming events and initiatives.Also coordinating with all the clubs under CACS for smooth conduction of events ."
                        />
                        <Teamcard
                            key="4"
                            imgsrc="/photos/rohan.jpg"
                            para="Rohan Saini Technical Secretary"
                            description = "Oversees tech requirements, and ensures the availability of necessary software or hardware including official website of CACS. They play a crucial role in troubleshooting technical issues during events and maintaining the society’s digital presence."
                        />
                        <Teamcard
                            key="5"
                            imgsrc="/photos/keshav.jpg"
                            para="Keshav Gupta Logistic Secretary"
                            description = "Manages all logistical needs for events, such as booking venues, setting up equipment, and arranging transportation. Their role is essential to make sure events run smoothly with all physical requirements in place."
                        />
                        <Teamcard
                            key="6"
                            imgsrc="/photos/suyash.jpg"
                            para="Suyash Sarda Decor Secretary"
                            description = "Responsible for the aesthetic setup and visual presentation at events, including stage design, banners, and decorations. They ensure that all events reflect the theme and ambiance planned, enhancing the overall experience for attendees."
                        />
                        <Teamcard
                            key="7"
                            imgsrc="/photos/saransh.jpg"
                            para="Saransh Singhal Finance Secretary"
                            description = "In charge of budgeting, tracking expenses, and managing funds. They maintain clear records of transactions, ensuring all financial activities are transparent and support the society’s goals."
                        />
                        <Teamcard
                            key="8"
                            imgsrc="/photos/arpit.jpg"
                            para="Arpit Sharma PR Secretary"
                            description = "Manages public relations by promoting the society’s activities, achievements, and mission. They handle communication with external partners and help build the society’s public image."
                        />
                        <Teamcard
                            key="9"
                            imgsrc="/photos/sashank.jpg"
                            para="Shashank Verma Marketting Secretary"
                            description = "Focuses on marketing and promotions, particularly on social media and public platforms, to increase visibility and engagement for events. They develop campaigns that attract a broader audience to the society."
                        />
                    </div>
                </section>
            </main>
        </>
    );
  
};
export default Team;
