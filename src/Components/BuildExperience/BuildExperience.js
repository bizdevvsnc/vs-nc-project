import './BuildExperience.css';
import { tmobile } from '../photos/svg/tmobile';
import { verizon } from '../photos/svg/verizon';
import { atandt } from '../photos/svg/atandt';
import { dish } from '../photos/svg/dish';
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const BuildExperience = () =>{

    const container = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap.from(".effect",{opacity: 0, duration:1, delay: 0.5, x: 100, stagger: 0.7, scrollTrigger: {
            trigger: ".effect"
        }});
    }, { scope: container });

    return(
        <div>
            <h1 className='redTitle'>
                BUILD EXPERIENCE
            </h1>
            <div ref={container} className='containerWithCompanies'>
                <div className='effect'>
                {tmobile()}
                </div>
                <div className='effect'>
                {verizon()}
                </div>
                <div className='effect'>
                {atandt()}
                </div>
                <div className='effect'>
                {dish()}
                </div>
            </div>
        </div>
    )

}