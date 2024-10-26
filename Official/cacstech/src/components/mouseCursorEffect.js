"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { useLayoutEffect } from "react";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




import "./mouseCursorEffect.css";
import { transcode } from "buffer";





export default function Cursor(){

    
    
    

    const cursorRef = useRef(null);
    const rEffect = useRef(null);


    const isTouchDevice = 'ontouchstart' in window;
    
    useEffect(
        () => {
            
            const cursor = cursorRef.current;
            

            // console.log(cursor)
            if(isTouchDevice || !cursor ){
                return;
            }


                      
            window.addEventListener('mousemove', (e) =>{
                const {target, x, y} = e;
        
                const isTargetLinkOrBtn = 
                target?.closest('a') || target?.closest('button') || target?.closest('.hover');
        
                // console.log(target)
                
                const isTargetFocus1 = 
                target?.closest('focus');
        
                gsap.to(cursor, {
                    x: x + 3,
                    y: y + 3,
                    duration: 0.7,
                    delay: 0.2,
                    ease: 'power4',
                    opacity: isTargetLinkOrBtn ? 0.6 : 1,
                    transform: `scale(${isTargetLinkOrBtn ? 3.5 : 1})`
                    
                })

                
            })
            
            
            
            document.addEventListener('mouseleave', () =>{
                gsap.to(cursor,{
                    duration:0.7,
                    opacity:0,
                })
            })

 

        }, []
    );




    return(
        <div>
            <div ref={cursorRef} className="cursor"></div>
         
   
        </div>
    )
}