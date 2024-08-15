import './CoreValues.css';
import  innovIcon  from '../../Components/photos/innovIcon.png';
import  custFocusIcon from '../../Components/photos/custFocusIcon.png';
import  qualityIcon  from '../../Components/photos/qualityIcon.png';

export const CoreValues = () =>{
return(
    <div>
        <div className='titleToEnd'>
            <h1 className='redTitle'>
                CORE VALUES
            </h1>
            </div>

            <div className='bigContainerwithIcons'>
                <div className='smallContainer'>
                <img className='icon' src={innovIcon} alt='innovIcon'/>
                <h2 className='iconTitle'>Innovation</h2>
                <div className='pContainer'>
                <p className='iconText'>Embracing the latest technologies and methods to enhance our service delivery.</p>
                </div>
                </div>

                <div className='smallContainer'>
                <img className='icon' src={custFocusIcon} alt='custFocusIcon'/>
                <h2 className='iconTitle'>Customer Focus</h2>
                <div className='pContainer'>
                <p className='iconText'>Prioritizing customer satisfaction and building long-term partnerships.</p>
                </div>
                </div>

                <div className='smallContainer'>
                <img className='icon' src={qualityIcon} alt='qualityIcon'/>
                <h2 className='iconTitle'>Quality</h2>
                <div className='pContainer'>
                <p className='iconText'>Commitment to maintaining the highest standards in all our projects.</p>
                </div>
                </div>
            </div>

    </div>
)
}