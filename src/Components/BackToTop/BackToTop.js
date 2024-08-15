import React from "react";
import {useEffect, useState} from "react";
import Up from '../photos/upIcon.png';
import chatIcon from '../photos/chatIcon.png';
import './BackToTop.css';


function BackToTop() {

    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setBackToTopBtn(true)
            } else {
                setBackToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
        })
    }

    return(
        <div>
                     {backToTopBtn && (
                        <a className='emaillink' href="mailto:bizdev@vs-nc.com">
                <button className="chatBtn"
                ><img className="upImg" src={chatIcon} alt="chatBtn"/></button></a>
                     )}
            {backToTopBtn && (
                           <button className="backToTopBtn"
                onClick={scrollUp}><img className="upImg" src={Up} alt="upBtn"/></button>
            )}
            
        </div>
    )
}

export default BackToTop;