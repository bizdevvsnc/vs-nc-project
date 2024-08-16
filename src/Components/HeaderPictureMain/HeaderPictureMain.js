import React from 'react';
import './HeaderPictureMain.css'; 

export const HeaderPictureMain = () => {
    return (
        <div className="headerPictureMain">
        <picture>
            <source className="headerPic" srcSet="../photos/banerRotatedTwo.jpg" />
        </picture>
        </div>
    )
}