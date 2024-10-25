'use client'

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar"
// import Image from "next/image";
import gsap from "gsap";


import "./about.css"

import "../../../app/globals.css"



export default function About() {
    var gt = gsap.timeline();

 
    
    useEffect(()=>{
        var cardA = document.querySelectorAll(".msg-box");

 
        cardA.forEach(element => {
            
            // gt.fromTo(element.querySelector(".msg-box-text"), {y:100, opacity:0 , duration:0.1, clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",    y:0, opacity:1 , ease:"sine.out"});
            
            gt.fromTo(element, {  clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}, { duration:0.4, ease:"sine.in", clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",  });
            gt.fromTo( element.querySelector(".msg-box-img"),{y:100, opacity:0 , duration:0.1, clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",     y:0, opacity:1 , ease:"sine.out"});
            gt.fromTo(element.querySelector(".msg-box-text"), {y:100, opacity:0 , duration:0.1, clipPath:"polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)"}, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",    y:0, opacity:1 , ease:"sine.out"});

        });
        gt.fromTo(".cacsImg-box", {opacity:0}, { duration:1, opacity:1, ease:"sine.out"})

     
        gsap.fromTo('.background', {rotate:360,    opacity:0, duration:1, ease:"sine.out"}, {  scale:1, rotate:0, opacity:0.3})
        
        

    }, [])

    return (
        <div style={{marginBottom : "40px"}}>
            <Navbar></Navbar>
            <section  >
                <img className="background" src="/assets/S3.svg " alt="" srcset="" />
                 
                <div className="sec-wrap">
                    <h1 className="head1" >
                        About
                    </h1>


                    <div className="para">
                        <h2>Creative Arts and Cultural Society</h2>
                        <p className="intro" >
                            The Cultural and Activity Society (CACS) is the beating heart of IIIT Kota's vibrant cultural scene. As a hub of creativity, expression, and collaboration it is responsible for the smooth conduction of the annual cultural festivals of IIIT Kota, and performs various events with coordination of different Clubs throughout the academic year promoting cultural awareness and build a sense of community
                            <br /> <br /> To foster a vibrant and inclusive campus culture by celebrating diversity, creativity and student talent.

                        </p>

                            <br />
                            <br />

                
                    </div>


                    

              
                    <div className="msg-box">
                        <div className="msg-box-img" ><img src="/assets/img-people/president.jpg" alt="" /></div>
                        <div className="msg-box-text">
                            <h3>President's Message: </h3>  
                            <p   >

                                As president, I’m proud to lead a passionate and hardworking team that’s always pushing the limits of what we can achieve together. Whether it’s bringing the house down at our DJ and Garba nights, celebrating traditions like Ganesh Chaturthi, or diving deep into the arts, CACS is where we come alive.
                                <br /> <br />
                                 We’ve got something huge in the works—a fest that’s going to be bigger and better than ever before. Our team is working tirelessly to make sure it’s an event you won’t forget!
                                <br /> <br />
                                So, I invite each of you to dive in, bring your unique energy, and be part of this incredible journey. Let’s create magic!
                                <br />

                            </p>

                            <br />

                            <p   > Pawan Boss <br />President, CACS</p>
       

                        </div>
                    </div>



<br />
                    <div className="msg-box msg-box-rev">
                        <div className="msg-box-img" ><img src="/assets/img-people/vicePresident.jpg" alt="" /></div>
                        <div className="msg-box-text">
                            <h3>Vice President's Message: </h3>  
                            <p   >

                            Kem Cho, Everyone!
                                <br /> <br />
                                Welcome to CACS, where we mix creativity with a splash of blissfull zest! As Vice President, I’m super excited to be part of a team that knows how to celebrate life! From rocking our Garba nights that’ll make you want to dance until dawn to organizing vibrant fests we’re all about turning ideas into unforgettable experiences.
                                <br /> <br />
                                This year, let’s embrace the spirit of unity and joy .  Together, our team  will create magic that will resonate throughout our campus!
                                <br />

                            </p>

                            <br />

                            <p   > Jash Boss
                            <br />Vice President, CACS</p>
       

                        </div>
                    </div>


<br />
<br />
<br />
<br />

                    <div className="cacsImg-box" >
                        <h1>CACS Team</h1>
                        <img src="/assets/img-people/cacsGroup.jpeg" alt=""  />
                    </div>






 

                </div>

            </section>
        </div>
    )
}