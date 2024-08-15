import './Wireless.css';
import wirelessIcon from '../photos/wirelessIcon.png';
import wirelessOne from '../photos/wirelessOne.JPG';
import wirelessTwo from '../photos/wirelessTwo.jpg';
import wirelessThree from '../photos/wirelessThree.jpg';
import wirelessFour from '../photos/wirelessFour.png';
import wirelessFive from '../photos/wirelessFive.jpg';
import wirelessSix from '../photos/wirelessSix.png';
import wirelessSeven from '../photos/wirelessSeven.png';
import wirelessEight from '../photos/wirelessEight.png';
import wirelessNine from '../photos/wirelessNine.png';
import Carousel from '../Carousel/Carousel';
export const Wireless =() =>{

    const images = [
        { src: wirelessOne, alt: 'Wireless One' },
        { src: wirelessTwo, alt: 'Wireless Two' },
        { src: wirelessThree, alt: 'Wireless Three' },
        { src: wirelessFour, alt: 'Wireless Four'},
        { src: wirelessFive, alt: 'Wireless Five'},
        { src: wirelessSix, alt: 'Wireless Six'},
        { src: wirelessSeven, alt: 'Wireless Seven'},
        { src: wirelessEight, alt: 'Wireless Eight'},
        { src: wirelessNine, alt: 'Wireless Nine'}
      ];
    return(
        <div className='bigContainerWireless'>

            <div className='iconAndTitle'>
                <img className='icon' src={wirelessIcon} alt='icon Wireless'/>
                <h2 className='serviceTitle'>Wireless Infrastructure Deployment on Cell Towers & New Sites Build (NSB)</h2>
            </div>

            <div className='textAndImageWireless'>
                <div className='textWireless'>
                <ul className='serviceName'>• Equipment installation on SST, Monopole and GM towers, Flagpole, Rooftop, Water Tanks from different manufacturers (Nokia, Ericsson, Samsung):
                <li className='liLine'> Antennas and Air Antennas</li>
                <li className='liLine'> RRUs</li>
                <li className='liLine'> Hybrid, Coax lines and power trunks</li>
                <li className='liLine'> OVP and squids</li>
                </ul>
                <ul className='serviceName'>• Mounts Modifications on Sector Frames and Platforms:
                <li className='liLine'> Kickers</li>
                <li className='liLine'> Stiff arms</li>
                <li className='liLine'> V-frame stabilizer</li>
                <li className='liLine'> Any type of custom modification required by structural or mount analyze</li>
                </ul>
                </div>

                <div className='flyersMainContainer'>
    <div className='flyersContainer'>
      <Carousel images={images}/>
    </div>
</div>
            </div>
        </div>
    )
}