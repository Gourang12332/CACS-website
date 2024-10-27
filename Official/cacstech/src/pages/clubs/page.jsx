'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";

import "./clubs.css"

import "../../../app/globals.css"
import Navbar from "@/components/Navbar";





import eventsImg from "../../../public/json/data.json"


function Cards(props) {


    var cardHover = useRef(null)



    useEffect(() => {



        var i = document.querySelectorAll(".card-unit");

        gsap.timeline().fromTo(i, { y: +10, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "circ" })


        i.forEach((element) => {
            element.addEventListener('mouseenter', (e) => {

                // console.log(e.target)
                gsap.fromTo(e.target.querySelector(".carousel-hover"), { opacity: 0, display: "none" }, { display: "flex", opacity: 1 })
            })




            element.addEventListener('mouseleave', (e) => {

                // console.log(e.target)
                gsap.fromTo(e.target.querySelector(".carousel-hover"), { opacity: 1, }, { opacity: 0, display: "none" })
            })

        })


    }, [])




    return (
        <div ref={cardHover} className="card-unit  " >
            <img className="club-logo" src={props.imgSrc} alt="not found" />

            <div className="carousel-detail" >

                <h2  > {props.name} </h2>


                <span  > {props.tagline} </span>

            </div>

            <div className="carousel-hover">
                <p> {props.description} </p>
                <a href={props.insta} target="_blank"><img src="/assets/svg/s4.svg" alt="" /> <span> &nbsp; Follow now</span> </a>

            </div>


        </div>
    )
}


export default function Clubs() {

 
    
    useEffect(() => {
        gsap.fromTo('.background', {rotate:20,    opacity:0, duration:2, ease:"bounce"}, {  scale:1, rotate:0, opacity:0.3})
    }, []);

 


    var clubData = [
        {
            id: 1, name: "Odyssey", tagline: "Literature Club",
            desc: "Odyssey is the sanctuary for all lovers of literature. Whether you're into crafting poems, writing short stories, or engaging in debates and discussions about your favorite books, this is the place where language comes alive. From creative writing workshops to literary events, Odyssey helps students explore the depths of imagination and intellectual expression. Join us if you love to immerse yourself in the world of words and ideas.",
            imgSrc: " /assets/clubsLogo/odyssey.png",insta:"https://www.instagram.com/odyssey_iiitkota"
        },
        {
            id: 2, name: "Incognito", tagline: "Dance, Drama, Singing Club",
            desc: "Incognito is where performance art thrives. Whether it’s the rhythm of dance, the power of music, or the intensity of theatre, this club is dedicated to putting on unforgettable shows. From solo performances to group productions, the club nurtures talent in every form of artistic expression. For those who live to be on stage or love bringing stories to life through movement and song, Incognito offers the perfect platform.",
            imgSrc: " /assets/clubsLogo/incognito.png",insta:"https://www.instagram.com/incognito_iiitkota"
        },
        {
            id: 3, name: "Artive", tagline: "Art and Creativity Club",
            desc: "Artive is the creative hub for all visual artists at IIIT Kota. Whether you love to sketch, paint, design, or explore new mediums, this club gives you the tools and space to express your artistic vision. From workshops on painting techniques to large-scale collaborative art projects, Artive is a space where creativity flourishes and innovation is celebrated. For those who think with their hands and see the world through colors and forms, Artive is your playground.",
            imgSrc: " /assets/clubsLogo/artive.png",insta:"https://www.instagram.com/artive_iiitkota/"
        },
        {
            id: 4, name: "Neon Cinematics", tagline: "Photography & Videography Club",
            desc: "Neon Cinematics tells stories through the lens. This club is for anyone with a passion for photography and videography, whether you’re just starting out or already capturing stunning visuals. From cinematic video projects to curated photo exhibitions, Neon Cinematics teaches students the art of storytelling through imagery. If you have an eye for detail and a passion for capturing moments, this is the club for you.",
            imgSrc: " /assets/clubsLogo/neon.jpg",insta:"https://www.instagram.com/neoncinematics/"
        },
        {
            id: 5, name: "QNS", tagline: "Quills N Stills",
            desc: "QNS, also known as Quins, is the official magazine club of IIIT Kota. This club provides a platform for students to explore journalism, creative writing, editing, and design. From covering campus events to publishing insightful articles, the club captures the pulse of the student body through its publications. If you have a flair for writing, an eye for design, or a passion for storytelling, QNS is the perfect space to showcase your talents and contribute to the vibrant campus culture.",
            imgSrc: " /assets/clubsLogo/qns.png",insta:"https://www.instagram.com/qns_iiitkota/"
        },
        {
            id: 6, name: "TGCC", tagline: "The Green and Clean Club",
            desc: "TGCC is all about sustainability and environmental consciousness. Focused on promoting green initiatives on campus, this club organizes activities like tree planting, clean-up drives, and environmental awareness workshops. For those passionate about making the world a greener place and pushing eco-friendly initiatives, TGCC offers a platform to contribute to meaningful change.",
            imgSrc: " /assets/clubsLogo/tgcc.png",insta:"https://www.instagram.com/tgcc_iiitkota"
        },
        {
            id: 7, name: "FIC", tagline: "Fit India Club",
            desc: "Clutch is the home for gamers at IIIT Kota. Whether you’re into competitive eSports or casual gaming, this club is all about bringing together gaming enthusiasts to connect, compete, and collaborate. From tournaments to gaming events and workshops, Clutch creates a community where gamers can hone their skills and showcase their talent. For anyone passionate about the virtual battlefield, Clutch is the go-to spot.",
            imgSrc: " /assets/clubsLogo/ficClub.png", insta:"https://www.instagram.com/fitindia_iiitkota"
        },
        {
            id: 8, name: "Tathastu", tagline: "Dance Crew",
            desc: "Tathastu is the high-energy dance crew that turns every performance into an unforgettable experience. Specializing in all dance forms, from classical to contemporary, this crew is dedicated to excellence on stage. Whether performing for competitions or festivals, Tathastu represents the rhythm and passion of dance at IIIT Kota. Join if you have a love for movement and want to be part of something extraordinary.",
            imgSrc: " /assets/clubsLogo/tathastu.jpeg", insta:"https://www.instagram.com/crew_tathastu/"
        },
        {
            id: 9, name: "Paryavaran Shakti", tagline: "Environment Club",
            desc: "Paryavaran Shakti focuses on eco-awareness and conservation. From tackling issues like waste management to spreading awareness about environmental protection, this club takes proactive steps to make the campus more sustainable. With projects ranging from plantation drives to recycling initiatives, Paryavaran Shakti empowers students to contribute to a greener future.",
            imgSrc: " /assets/clubsLogo/paryavaranShakti.png", insta:"https://www.instagram.com/paryavaranshakti_iiitkota/",
        }
    ]


    return (
        
        <section  >

            <Navbar></Navbar>
            <div className="sec-wrap" style={{marginBottom : "100px"}}>
                <h1 className="head1" >Clubs</h1>



                <div id="clubCards" className="clubs-cards">


                    {/* <img className="background" src="https://i.pinimg.com/564x/44/78/72/4478722447b6e94bc4c4d2c911ff8049.jpg" alt="" srcset="" /> */}
                    <img className="background" src="/assets/s1.svg " alt="" srcset="" />



                    <Cards name={clubData[0].name} tagline={clubData[0].tagline} description={clubData[0].desc} imgSrc={clubData[0].imgSrc} insta={clubData[0].insta} />
                    <Cards name={clubData[1].name} tagline={clubData[1].tagline} description={clubData[1].desc} imgSrc={clubData[1].imgSrc} insta={clubData[1].insta} />
                    <Cards name={clubData[2].name} tagline={clubData[2].tagline} description={clubData[2].desc} imgSrc={clubData[2].imgSrc} insta={clubData[2].insta} />
                    <Cards name={clubData[3].name} tagline={clubData[3].tagline} description={clubData[3].desc} imgSrc={clubData[3].imgSrc} insta={clubData[3].insta} />

                    <Cards name={clubData[4].name} tagline={clubData[4].tagline} description={clubData[4].desc} imgSrc={clubData[4].imgSrc} insta={clubData[4].insta} />
                    <Cards name={clubData[5].name} tagline={clubData[5].tagline} description={clubData[5].desc} imgSrc={clubData[5].imgSrc} insta={clubData[5].insta} />
                    <Cards name={clubData[6].name} tagline={clubData[6].tagline} description={clubData[6].desc} imgSrc={clubData[6].imgSrc} insta={clubData[6].insta} />
                    {/* <Cards name={clubData[7].name} tagline={clubData[7].tagline} description={clubData[7].desc} imgSrc={clubData[7].imgSrc} insta={clubData[7].insta} /> */}
                    <Cards name={clubData[8].name} tagline={clubData[8].tagline} description={clubData[8].desc} imgSrc={clubData[8].imgSrc} insta={clubData[8].insta} /> 












                </div>

            </div>

        </section>
    );
}


