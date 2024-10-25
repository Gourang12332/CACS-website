// "use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";  // Import Next.js dynamic
import Navbar from "../../components/Navbar"

// Dynamically import gsap/ScrollTrigger only on the client side
const gsap = dynamic(() => import("gsap"), { ssr: false });
const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), { ssr: false });

// Import Carousel and Bootstrap styles
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./events.css";
import "../../../app/globals.css";

// Carousel component
function CarouselComponent() {
  useEffect(() => {
    if (typeof window !== "undefined" && gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);  // Register ScrollTrigger only in the client
    }
  }, [gsap, ScrollTrigger]);

  return (
    <div className="carousel">
      <div className="carousel-box">
        <div className="carousel-wrap">
          {[...Array(8)].map((_, i) => (
            <div className="carousel-item" key={i}>
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*oXTLp2aoats-JyUvy_4oAQ.jpeg" alt="carousel item" />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-btn">
        <img id="carousel-left" src="/assets/c1.svg" alt="Previous" />
        <img id="carousel-right" src="/assets/c1.svg" alt="Next" />
      </div>
    </div>
  );
}

// Events page component
export default function Events() {
  return (
    <>
      <Navbar />
      <div>
        <section>
          <div className="sec-wrap">
            <h1 className="head1">Events</h1>

            <Carousel className="carousel-box">
              <Carousel.Item>
                <img className="d-block w-100" src="/garbanight.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="/garbanight.jpg" alt="Second slide" />
              </Carousel.Item>
            </Carousel>

            <div className="events-box">
              <h2>Garba Gravity - A Navratri Extravaganza</h2>
              <p>
                Garba Gravity was an unforgettable two-day celebration of music, dance, and culture during Navratri at IIIT Kota. The event kicked off with a vibrant DJ Night on the first day, where the campus came alive with pulsating beats and high energy as students danced the night away under the stars. The second day was all about tradition, with an exhilarating Garba Night. Students dressed in traditional attire, filling the night with colorful dance moves, joy, and the festive spirit of Navratri.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
