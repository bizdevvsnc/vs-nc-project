import './HeaderMain.css';
import { Navbar } from '../Navbar/Navbar';
import { HeaderPictureMain } from '../HeaderPictureMain/HeaderPictureMain';
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import particles from '../photos/particles.png';




export const HeaderMain= () => {

    const container = useRef();
    const tl = useRef();



    useGSAP(() => {
        tl.current = gsap.timeline({ repeat: -1 })
        .from(".effect", {
            opacity: 0, 
            duration: 6, 
            y: 100,
            stagger: 0.7, 
            ease: "power1.inOut"
        })
        .to(".effect", {
            opacity: 0, 
            duration: 2,
            ease: "power1.inOut"
        });
        tl.current = gsap.from(".particlesHeader",{opacity: 0, duration:3, delay: 1, yoyo: true,
        repeat: -1,
        ease: "power1.inOut"});
    }, { scope: container });
    

    return (
        <div  ref={container} >

            <header className="headerStyle">
                <div className="headerBackground">
                    <HeaderPictureMain />
                </div>
                <div className="headerContext">
                    <Navbar />
                    <div className="titleContainer">
                        <h1 className="title">
                            VS<span className="andInc">&</span>NC<span className="andInc">INC</span><br />
                        </h1>
                        <p>
                            <span className="undertext">Telecommunication services</span>
                        </p>
                        <div>
                        <div className='test'>
                        <img src={particles} className='particlesHeader' alt='particles'/>
                        </div>

                        <div className='floatingText'>
                        <h3 className='float One effect'>Customer-centric approach</h3>
                        <h3 className='float Two effect'>Innovation</h3>
                        <h3 className='float Three effect'>Excellence</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
