import './AboutUs.css';
import aboutUsPhoto from '../photos/aboutusPhoto.png';
import { BuildExperience } from '../BuildExperience/BuildExperience';
import { CoreValues } from '../CoreValues/CoreValues';
import { OurMission } from '../OurMission/OurMission';
import { OurVision } from '../OurVision/OurVision';
import React, { useState } from 'react';


export const AboutUs = () => {

    const [isTextVisible, setTextVisible] = useState(false);

    const toggleTextVisibility = () => {
        setTextVisible(!isTextVisible);
    };

return(
<div className='background'>
<div className='lineWithTitleAboutUs'>
<h1 className='titleParag'>ABOUT US</h1>
<div className='lineAboutUs'></div>
</div>


<div className='textWithPic'>
<img className='aboutUsPhoto' src={aboutUsPhoto} alt='the tower'/>
<p className='textToTheRight'>
<span className='absatz'>Our company was <span className='blueLetter'>established in 2021</span> with a vision to revolutionize the telecom construction industry through <span className='blueLetter'>innovation, efficiency, and unparalleled service quality.</span>  We have quickly established a reputation for delivering <span className='blueLetter'>high-quality telecom infrastructure projects.</span></span><br></br>
<div className='hiddenText'>
<span className='absatz'>Our team comprises experienced technicians, tower climbers, crew leads, project managers, and support staff.
Continuous training programs to keep our workforce updated with <span className='blueLetter'>the latest industry requirements and best practices.</span>&nbsp;
Strong relationships with suppliers for timely and  cost-effective procurement of <span className='blueLetter'>high-quality materials.</span>&nbsp;
Investment in state-of-the-art equipment and tools to enhance precision and efficiency in installations.
</span>
</div></p>
</div>
{isTextVisible && (
<p className='text'>
<div className='visible820'>
<span className='absatz'>Our team comprises experienced technicians, tower climbers, crew leads, project managers, and support staff.
Continuous training programs to keep our workforce updated with <span className='blueLetter'>the latest industry requirements and best practices.</span>&nbsp;
Strong relationships with suppliers for timely and cost-effective procurement of <span className='blueLetter'>high-quality materials.</span>&nbsp;
Investment in state-of-the-art equipment and tools to enhance precision and efficiency in installations.
</span>
</div>
<div className='space'>
    <span className='absatz'>We provide efficient inventory to ensure the availability of necessary materials when needed.
Proper handling and storage practices to<span className='blueLetter'> maintain material integrity and reduce wastage.</span>&nbsp;
Reliable logistics for the timely delivery of materials and equipment to project sites.
<span className='blueLetter'> We ensure sites are ready for construction to avoid delays and ensure smooth workflow.</span></span>
</div></p>
)}
<div className='readmoreComponent'>
<div className='linebtnLeft'></div>

    <button className='btnSecondary' onClick={toggleTextVisibility}>
          {isTextVisible ? 'READ LESS' : 'READ MORE'}
        </button>

        <div className='linebtnRight'></div>
</div>

<BuildExperience/>
<CoreValues/>
<OurMission/>
<OurVision/>
</div>
)
}
