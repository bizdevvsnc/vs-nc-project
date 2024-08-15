import './OurVision.css';
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import blueParticles from '../photos/blueParticles.png';

export const OurVision = () =>{
    const containerTwo = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap.from(".blueParticles",{opacity: 0, duration: 1.7, delay: 1.5, scrollTrigger: {
            trigger: ".blueParticles"
        }, yoyo: true,
        repeat: -1,
        ease: "power1.inOut"});
    }, { scope: containerTwo });

    return(
        <div ref={containerTwo}  className="ourVision">
            <div className='effectParticles'>
    <img className='blueParticles' src={blueParticles} alt='blue elements'/>
</div>

            <div className='titleToEnd'>
                <h1 className='redTitleVision'>
                    OUR VISION
                </h1>
</div>

<div className='containerParagVision'>
<p className='paragVision'>
To be a leading telecom construction company recognized for our excellence, innovation, and
customer-centric approach.</p>
</div>

</div>
)
    }