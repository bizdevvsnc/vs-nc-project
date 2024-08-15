import backgroundPhoto from '../photos/backgroundPhoto.png';
import './OurMission.css';

export const OurMission = () =>{
    return(
        <div>
            <h1 className='redTitle'>
                OUR MISSION
            </h1>
            <div className='textMission'>
                <p className='paragMission'>
                To provide top-notch telecom construction services that meet the evolving needs of our clients,
ensuring reliable and robust telecom infrastructure.</p>
</div>
            <div className='backgrPhotoAndText'>
                <div className='backgrPhContainer'>
                <img className='backgrPhoto' src={backgroundPhoto} alt="background"/>
                </div>
            </div>
        </div>
    )
}